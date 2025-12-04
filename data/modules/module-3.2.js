export const moduleContent = {
  id: "module-3.2",
  title: "Context Management & Custom Instructions",
  description: "Optimize Copilot's performance by managing context and providing custom instructions.",
  objectives: [
    "Leverage workspace context effectively",
    "Create custom instructions for consistent code generation",
    "Use chat participants and context references"
  ],
  sections: [
    {
      title: "1. Managing Context",
      content: `
        <p>Copilot needs context to give good answers. You can explicitly provide it:</p>
        <ul>
            <li><strong>Open Files</strong>: Copilot looks at open tabs. Keep relevant files open.</li>
            <li><strong>Selection</strong>: Highlight code to focus Copilot's attention.</li>
            <li><strong>#file</strong>: In Chat, type <code>#file:utils.ts</code> to reference a specific file.</li>
        </ul>
      `
    },
    {
      title: "2. Custom Instructions",
      content: `
        <p>Create a <code>.github/copilot-instructions.md</code> file in your repository root to set global rules.</p>
        <div class="card">
            <h3>Example Instructions</h3>
            <pre><code class="language-markdown"># Coding Standards

- Use React Functional Components with Hooks.
- Style components using Tailwind CSS.
- Use 'date-fns' for all date manipulations.
- Always write JSDoc comments for exported functions.</code></pre>
        </div>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Make Chat an Expert in Your Workspace", url: "https://code.visualstudio.com/docs/copilot/reference/workspace-context" },
        { text: "Copilot Custom Instructions", url: "https://docs.github.com/en/copilot/get-started/features" },
        { text: "Manage Chat Context with References", url: "https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context-references" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Create a <code>.github/copilot-instructions.md</code> file with your team's coding standards</li>
          <li>Practice using <code>@workspace</code> queries on a multi-file project</li>
          <li>Experiment with different context combinations to improve suggestion quality</li>
        </ol>
      `
    }
  ]
};
