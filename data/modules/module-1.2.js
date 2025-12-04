export const moduleContent = {
  id: "module-1.2",
  title: "Installation & Configuration",
  description: "Get GitHub Copilot up and running in your preferred IDE and configure it for your needs.",
  objectives: [
    "Install GitHub Copilot in VS Code and Visual Studio",
    "Configure settings and authenticate your account",
    "Understand workspace context and custom instructions"
  ],
  sections: [
    {
      title: "1. Installation",
      content: `
        <p>Installing Copilot is straightforward for both VS Code and Visual Studio.</p>
        <div class="card">
            <h3>VS Code Setup</h3>
            <ol>
              <li>Open VS Code Extensions Marketplace (<code>Ctrl+Shift+X</code>).</li>
              <li>Search for "GitHub Copilot" and install.</li>
              <li>Sign in with your GitHub account when prompted.</li>
            </ol>
            <p><em>Tip: Install the "GitHub Copilot Chat" extension as well for the chat interface.</em></p>
        </div>
      `
    },
    {
      title: "2. Configuration",
      content: `
        <p>You can configure Copilot's behavior in your settings.</p>
        <pre><code class="language-json">// settings.json example for VS Code
{
    "github.copilot.enable": {
        "*": true,
        "plaintext": false,
        "markdown": true
    },
    "github.copilot.editor.enableAutoCompletions": true
}</code></pre>
      `
    },
    {
      title: "3. Custom Instructions",
      content: `
        <p>You can define project-specific instructions in a <code>.github/copilot-instructions.md</code> file.</p>
        <pre><code class="language-markdown"># .github/copilot-instructions.md
- Always use TypeScript for this project.
- Use 'const' over 'let' where possible.
- Prefer arrow functions.
        </code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Get Started with GitHub Copilot in VS Code", url: "https://code.visualstudio.com/docs/copilot/getting-started" },
        { text: "Install GitHub Copilot in Visual Studio", url: "https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-install-and-states" },
        { text: "How to Set Up GitHub Copilot in Your IDE", url: "https://dev.to/codewithsimon/how-to-set-up-github-copilot-in-your-ide-step-by-step-guide-14im" }
      ]
    },
    {
      title: "Practical Exercise",
      content: "<ul><li>Complete the installation in both IDEs</li><li>Create a <code>.github/copilot-instructions.md</code> file in a test project to define coding preferences</li></ul>"
    }
  ]
};
