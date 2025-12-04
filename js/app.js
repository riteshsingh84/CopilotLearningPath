import { courseStructure } from '../data/index.js';

class App {
    constructor() {
        this.courseStructure = courseStructure;
        this.completedModules = new Set(JSON.parse(localStorage.getItem('copilotCourseProgress')) || []);
        this.currentModuleId = null;
        this.currentTheme = localStorage.getItem('copilotCourseTheme') || 'light';
        this.sidebarNav = document.getElementById('sidebar-nav');
        this.contentArea = document.getElementById('content-area');
        this.courseProgress = document.getElementById('course-progress');
        this.progressText = document.getElementById('progress-text');
        this.menuToggle = document.getElementById('menu-toggle');
        this.themeToggle = document.getElementById('theme-toggle');
        this.sidebar = document.getElementById('sidebar');

        this.init();
    }

    init() {
        this.applyTheme();
        this.renderSidebar();
        this.updateProgress();
        this.setupEventListeners();
        this.handleRouting();
    }

    setupEventListeners() {
        window.addEventListener('hashchange', () => this.handleRouting());

        this.menuToggle.addEventListener('click', () => {
            this.sidebar.classList.toggle('open');
        });

        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Close sidebar on mobile when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 &&
                this.sidebar.classList.contains('open') &&
                !this.sidebar.contains(e.target) &&
                !this.menuToggle.contains(e.target)) {
                this.sidebar.classList.remove('open');
            }
        });
    }

    handleRouting() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            this.loadModule(hash);
        } else {
            // Default to first module
            const firstModule = this.courseStructure[0].modules[0];
            window.location.hash = firstModule.id;
        }
    }

    renderSidebar() {
        this.sidebarNav.innerHTML = '';

        this.courseStructure.forEach(phase => {
            const group = document.createElement('div');
            group.className = 'phase-group';

            const title = document.createElement('div');
            title.className = 'phase-title';
            title.textContent = phase.title;
            group.appendChild(title);

            phase.modules.forEach(module => {
                const link = document.createElement('a');
                link.className = `module-link ${this.completedModules.has(module.id) ? 'completed' : ''}`;
                link.dataset.id = module.id;
                link.textContent = module.title;
                link.addEventListener('click', () => {
                    window.location.hash = module.id;
                    if (window.innerWidth <= 768) {
                        this.sidebar.classList.remove('open');
                    }
                });
                group.appendChild(link);
            });

            this.sidebarNav.appendChild(group);
        });
    }

    updateSidebarActiveState() {
        const links = this.sidebarNav.querySelectorAll('.module-link');
        links.forEach(link => {
            if (link.dataset.id === this.currentModuleId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    async loadModule(moduleId) {
        this.currentModuleId = moduleId;
        this.updateSidebarActiveState();

        // Find module info
        let moduleInfo = null;
        for (const phase of this.courseStructure) {
            const found = phase.modules.find(m => m.id === moduleId);
            if (found) {
                moduleInfo = found;
                break;
            }
        }

        if (!moduleInfo) return;

        // Show loading
        this.contentArea.innerHTML = '<div class="card"><p>Loading content...</p></div>';

        try {
            // Dynamic import
            // Note: In a real build system, this path resolution might need adjustment.
            // Since we are using native ES modules in browser, relative paths from this file work.
            // But moduleInfo.file is "./data/modules/..." relative to root?
            // Let's check data/index.js. It says "./data/modules/...".
            // We are in js/app.js. So we need to go up one level.
            // Actually, imports are relative to the file importing them.
            // data/index.js is imported here.
            // Wait, the file path in data/index.js is a string.
            // We need to construct the import path relative to *this* file (app.js) or absolute.
            // app.js is in /js/. data is in /data/.
            // So path should be ../data/modules/module-X.js.
            // The string in data/index.js is "./data/modules/...".
            // I should fix the path resolution.

            const importPath = `.${moduleInfo.file}?t=${Date.now()}`; // resulting in ../data/modules/...?t=timestamp
            const module = await import(importPath);
            this.renderContent(module.moduleContent);
        } catch (error) {
            console.error('Error loading module:', error);
            this.contentArea.innerHTML = `<div class="card"><p>Error loading content: ${error.message}</p></div>`;
        }
    }

    renderContent(content) {
        console.log('Rendering content:', content);
        let html = `
      <h1>${content.title}</h1>
      <p class="description">${content.description}</p>
      
      <div class="card">
        <h3>Learning Objectives</h3>
        <ul>
          ${content.objectives.map(obj => `<li>${obj}</li>`).join('')}
        </ul>
      </div>
    `;

        content.sections.forEach(section => {
            html += `<div class="section">
        <h2>${section.title}</h2>
      `;

            if (section.type === 'links') {
                html += `<ul>
          ${section.items.map(item => `<li><a href="${item.url}" target="_blank">${item.text}</a></li>`).join('')}
        </ul>`;
            } else {
                html += section.content;
            }

            html += `</div>`;
        });

        // Mark Complete Button
        const isCompleted = this.completedModules.has(content.id);
        html += `
      <div class="actions" style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
        <button id="mark-complete-btn" class="btn ${isCompleted ? 'btn-secondary' : ''}">
          ${isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        ${this.getNextModuleId(content.id) ? `<button id="next-module-btn" class="btn btn-secondary" style="margin-left: 1rem;">Next Module</button>` : ''}
      </div>
    `;

        this.contentArea.innerHTML = html;

        document.getElementById('mark-complete-btn').addEventListener('click', () => {
            this.toggleComplete(content.id);
        });

        const nextBtn = document.getElementById('next-module-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                window.location.hash = this.getNextModuleId(content.id);
            });
        }
    }

    getNextModuleId(currentId) {
        let foundCurrent = false;
        for (const phase of this.courseStructure) {
            for (const module of phase.modules) {
                if (foundCurrent) return module.id;
                if (module.id === currentId) foundCurrent = true;
            }
        }
        return null;
    }

    toggleComplete(moduleId) {
        if (this.completedModules.has(moduleId)) {
            this.completedModules.delete(moduleId);
        } else {
            this.completedModules.add(moduleId);
        }

        localStorage.setItem('copilotCourseProgress', JSON.stringify([...this.completedModules]));
        this.updateProgress();
        this.renderSidebar(); // To update checkmarks

        // Re-render button state
        const btn = document.getElementById('mark-complete-btn');
        if (btn) {
            const isCompleted = this.completedModules.has(moduleId);
            btn.textContent = isCompleted ? 'Mark as Incomplete' : 'Mark as Complete';
            btn.className = `btn ${isCompleted ? 'btn-secondary' : ''}`;
        }
    }

    updateProgress() {
        let totalModules = 0;
        this.courseStructure.forEach(p => totalModules += p.modules.length);
        const completedCount = this.completedModules.size;
        const percent = totalModules === 0 ? 0 : Math.round((completedCount / totalModules) * 100);

        this.courseProgress.style.width = `${percent}%`;
        this.progressText.textContent = `${percent}%`;
    }

    applyTheme() {
        if (this.currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('copilotCourseTheme', this.currentTheme);
        this.applyTheme();
    }
}

new App();
