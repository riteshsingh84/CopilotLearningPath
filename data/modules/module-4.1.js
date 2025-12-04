export const moduleContent = {
  id: "module-4.1",
  title: "Code Generation & Completion",
  description: "Boost your productivity by letting Copilot generate boilerplate code and complete functions.",
  objectives: [
    "Generate boilerplate code efficiently",
    "Create functions from comments",
    "Build complete features with agent mode"
  ],
  sections: [
    {
      title: "1. Comment-Driven Development",
      content: `
        <p>Write a comment describing what you want, and let Copilot implement it.</p>
        <div class="card">
            <pre><code class="language-javascript">// Create an Express server that listens on port 3000
// and has a health check endpoint at /health</code></pre>
            <p>Copilot will suggest:</p>
            <pre><code class="language-javascript">const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});</code></pre>
        </div>
      `
    },
    {
      title: "2. Generating Tests",
      content: `
        <p>You can also use comments to generate tests.</p>
        <pre><code class="language-javascript">// Test the calculateTotal function
describe('calculateTotal', () => {
  it('should return 0 for empty items', () => {
    // ...
  });
});</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "AI-Assisted Development Workflows", url: "https://nx.dev/blog/practical-guide-effective-ai-coding" },
        { text: "Best Practices for Using Copilot", url: "https://docs.github.com/en/copilot/get-started/best-practices" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Build a REST API endpoint using comment-driven development</li>
          <li>Generate a React component from a functional description</li>
          <li>Use agent mode to scaffold an entire feature</li>
        </ol>
      `
    }
  ]
};
