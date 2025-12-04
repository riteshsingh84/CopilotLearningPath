export const moduleContent = {
  id: "module-2.2",
  title: "Copilot Chat Interface",
  description: "Interact with Copilot using natural language to ask questions, explain code, and get assistance.",
  objectives: [
    "Use Copilot Chat for conversational coding assistance",
    "Understand chat participants and agents (@workspace, @terminal, @vscode)",
    "Ask effective questions to get better responses"
  ],
  sections: [
    {
      title: "1. Using Copilot Chat",
      content: `
        <p>Copilot Chat lives in your sidebar (or as an inline chat). You can ask it to explain code, fix bugs, or generate new code.</p>
        <div class="card">
            <h3>Example Prompts</h3>
            <ul>
                <li>"Explain how this function works."</li>
                <li>"Refactor this class to use the Singleton pattern."</li>
                <li>"Write a unit test for the selected code."</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Chat Participants",
      content: `
        <p>Use special keywords to target your questions:</p>
        <ul>
          <li><code>@workspace</code>: Asks questions about your entire project context.</li>
          <li><code>@vscode</code>: Asks about VS Code commands and settings.</li>
          <li><code>@terminal</code>: Asks about terminal commands and errors.</li>
        </ul>
        <pre><code class="language-plaintext">@workspace How is authentication handled in this app?</code></pre>
      `
    },
    {
      title: "3. Slash Commands",
      content: `
        <p>Use slash commands for common tasks:</p>
        <ul>
          <li><code>/explain</code>: Explain the selected code.</li>
          <li><code>/fix</code>: Propose a fix for the problems in the selected code.</li>
          <li><code>/tests</code>: Generate unit tests for the selected code.</li>
          <li><code>/doc</code>: Generate documentation for the selected code.</li>
        </ul>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Introduction to Prompt Engineering with GitHub Copilot", url: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/" },
        { text: "Copilot Chat Reference", url: "https://code.visualstudio.com/docs/copilot/reference/workspace-context" },
        { text: "GitHub Copilot Quickstart", url: "https://docs.github.com/en/copilot/get-started/quickstart" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Open Copilot Chat (<code>Ctrl+Alt+I</code> in VS Code or <code>Ctrl+Shift+/</code> in Visual Studio)</li>
          <li>Ask: "Explain what this file does" on an existing code file</li>
          <li>Use <code>@workspace</code> to ask questions about your entire codebase</li>
          <li>Practice with slash commands like <code>/explain</code>, <code>/fix</code>, <code>/tests</code></li>
        </ol>
      `
    }
  ]
};
