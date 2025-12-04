export const moduleContent = {
  id: "module-7.2",
  title: "Copilot Extensions & Customization",
  description: "Tailor Copilot to your specific needs with extensions and custom agents.",
  objectives: [
    "Explore available Copilot extensions",
    "Create custom prompts and instructions",
    "Build domain-specific agents"
  ],
  sections: [
    {
      title: "1. Copilot Extensions",
      content: `
        <p>Extensions allow Copilot to interact with external services.</p>
        <div class="card">
            <h3>Examples</h3>
            <ul>
                <li><strong>DataStax</strong>: Query your database using natural language.</li>
                <li><strong>Sentry</strong>: Analyze error logs and suggest fixes.</li>
                <li><strong>Azure</strong>: Manage cloud resources.</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Building Custom Agents",
      content: `
        <p>You can build your own Copilot extensions using the GitHub Copilot Extensions API.</p>
        <pre><code class="language-javascript">// Example: A simple agent that echoes back
app.post('/agent', (req, res) => {
  const { messages } = req.body;
  const lastMessage = messages[messages.length - 1];
  res.json({
    choices: [{
      index: 0,
      message: {
        role: 'assistant',
        content: \`You said: \${lastMessage.content}\`
      }
    }]
  });
});</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "GitHub Copilot Customization Library", url: "https://docs.github.com/en/copilot/tutorials" },
        { text: "Awesome GitHub Copilot Repository", url: "https://github.com/github/awesome-copilot" },
        { text: "Building Copilot Extensions", url: "https://docs.github.com/copilot/building-copilot-extensions" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Create a custom agent for your team's workflow</li>
          <li>Build a library of reusable prompts for common tasks</li>
          <li>Experiment with different chat modes and personas</li>
        </ol>
      `
    }
  ]
};
