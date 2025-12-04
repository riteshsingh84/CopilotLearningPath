export const moduleContent = {
  id: "module-5.2",
  title: "Debugging & Error Resolution",
  description: "Identify and fix bugs faster with intelligent debugging assistance.",
  objectives: [
    "Use Copilot to debug code errors",
    "Fix compiler and linting errors",
    "Understand and resolve exception handling"
  ],
  sections: [
    {
      title: "1. The /fix Command",
      content: `
        <p>When you encounter an error (red squiggly line), select it and use <code>/fix</code> in Chat.</p>
        <div class="card">
            <h3>Scenario</h3>
            <p>You have a type error in TypeScript:</p>
            <pre><code class="language-typescript">const user: User = { name: "John" }; // Error: Property 'id' is missing</code></pre>
            <p><strong>Action:</strong> Select code -> <code>/fix</code></p>
            <p><strong>Copilot Suggestion:</strong></p>
            <pre><code class="language-typescript">const user: User = { name: "John", id: 1 }; // Adds missing property</code></pre>
        </div>
      `
    },
    {
      title: "2. Explaining Errors",
      content: `
        <p>If you don't understand an error message, paste it into Chat or ask:</p>
        <pre><code class="language-plaintext">@terminal Why am I getting "Module not found: Error: Can't resolve './App'"?</code></pre>
        <p>Copilot will analyze your project structure and suggest checking the file path or imports.</p>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "The Developer's Guide to Debugging AI Code", url: "https://speedscale.com/blog/the-developers-guide-to-debugging-ai-generated-code/" },
        { text: "Systematic Debugging Workflow", url: "https://www.softwareseni.com/testing-and-debugging-ai-generated-code-systematic-strategies-that-work/" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Debug a function with logical errors using Copilot</li>
          <li>Fix security vulnerabilities identified by Copilot</li>
          <li>Resolve runtime errors with AI assistance</li>
        </ol>
      `
    }
  ]
};
