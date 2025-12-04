export const moduleContent = {
  id: "module-7.1",
  title: "Agent Mode & Autonomous Coding",
  description: "Unlock the power of autonomous coding with Copilot's agent mode for complex tasks.",
  objectives: [
    "Understand agent mode capabilities",
    "Use agents for complex, multi-step tasks",
    "Integrate with external tools and MCP servers"
  ],
  sections: [
    {
      title: "1. What is Agent Mode?",
      content: `
        <p>Agent mode allows Copilot to perform multi-step tasks autonomously, such as editing multiple files, running terminal commands, and fixing errors.</p>
        <div class="card">
            <h3>Capabilities</h3>
            <ul>
                <li><strong>Multi-file Edits</strong>: Can modify several files in one go.</li>
                <li><strong>Terminal Access</strong>: Can run build commands or tests.</li>
                <li><strong>Self-Correction</strong>: If a command fails, it tries to fix it.</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Using Agents",
      content: `
        <p>In VS Code, you can switch to Agent mode in the Chat interface.</p>
        <pre><code class="language-plaintext">@workspace /agent Refactor the authentication flow to use JWTs. 
Create a new auth service and update the login component.</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Agent Mode 101", url: "https://github.blog/ai-and-ml/github-copilot/agent-mode-101-all-about-github-copilots-powerful-mode/" },
        { text: "Best Practices for Using Copilot Agents", url: "https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks" },
        { text: "Awesome GitHub Copilot Customizations", url: "https://github.com/github/awesome-copilot" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Use agent mode to build a complete feature from a GitHub issue</li>
          <li>Create a custom agent for your specific workflow</li>
          <li>Integrate MCP servers for enhanced capabilities</li>
        </ol>
      `
    }
  ]
};
