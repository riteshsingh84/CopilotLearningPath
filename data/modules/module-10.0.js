export const moduleContent = {
  id: "module-10.0",
  title: "Documentation & Resources",
  description: "Collection of official documentation, guides, PDFs, and learning materials available in the docs folder.",
  objectives: [
    "Access comprehensive documentation files",
    "Review certification guides and strategies",
    "Study learning materials and mindmaps",
    "Explore badges and achievements"
  ],
  sections: [
    {
      title: "Certification & Strategy Guides",
      type: "resources",
      items: [
        { text: "GitHub Copilot Certification Strategy Guide", url: "./docs/GH-300_Certification_Strategy_Guide.pdf" },
        { text: "GitHub Copilot Certification MindMap", url: "./docs/GitHub-Copilot-Certification-MindMap.png" }
      ]
    },
    {
      title: "Learning Materials",
      type: "resources",
      items: [
        { text: "GitHub Copilot Learning Path - Presentation", url: "./docs/GitHub Copilot Learning Path PPT.pdf" },
        { text: "GitHub Copilot Learning Path - Details", url: "./docs/GitHub Copilot Learning Path-Details.pdf" },
        { text: "Introduction to Prompt Engineering with GitHub Copilot", url: "./docs/Introduction-to-Prompt-Engineering-with-GitHub-Copilot.pdf" },
        { text: "Responsible AI with GitHub Copilot", url: "./docs/Responsible_AI_with_GitHub_Copilot.pdf" }
      ]
    },
    {
      title: "Achievement Badges",
      type: "resources",
      items: [
        { text: "View Achievement Badges", url: "./docs/badges/" }
      ]
    },
    {
      title: "How to Use These Resources",
      content: `
        <p>This collection of resources is designed to support your GitHub Copilot learning journey:</p>
        <div class="card">
          <h3>Recommended Learning Approach</h3>
          <ol>
            <li><strong>Start with the Learning Path Details</strong> - Get a comprehensive overview of the entire course structure</li>
            <li><strong>Review the Presentation</strong> - Visual presentation of key concepts and progression</li>
            <li><strong>Study Prompt Engineering</strong> - Master the art of crafting effective prompts</li>
            <li><strong>Understand Responsible AI</strong> - Learn ethical practices and best practices</li>
            <li><strong>Prepare for Certification</strong> - Use the certification strategy guide and mindmap</li>
            <li><strong>Track Your Progress</strong> - Earn and collect achievement badges as you complete modules</li>
          </ol>
        </div>
      `
    }
  ]
};
