export const moduleContent = {
  id: "module-3.1",
  title: "Crafting Effective Prompts",
  description: "Learn the art of prompt engineering to get the best results from GitHub Copilot.",
  objectives: [
    "Master the fundamentals of prompt engineering",
    "Use the Goal-Context-Expectations-Source (GCES) framework",
    "Iterate on prompts for better code generation"
  ],
  sections: [
    {
      title: "1. The GCES Framework",
      content: `
        <p>To get the best results, structure your prompts using the GCES framework:</p>
        <div class="card">
            <ul>
                <li><strong>Goal</strong>: What are you trying to achieve?</li>
                <li><strong>Context</strong>: What information does Copilot need (variables, libraries, etc.)?</li>
                <li><strong>Expectations</strong>: How should the output look (format, style)?</li>
                <li><strong>Source</strong>: Are there specific examples or docs to reference?</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Prompt Examples",
      content: `
        <p>Compare a weak prompt with a strong one:</p>
        <div class="card">
            <h4>Weak Prompt</h4>
            <pre><code class="language-plaintext">// Write a function to fetch data</code></pre>
            
            <h4>Strong Prompt</h4>
            <pre><code class="language-plaintext">// Write an async TypeScript function to fetch user data from /api/users.
// It should handle 404 and 500 errors using a try-catch block.
// Return a User interface object.</code></pre>
        </div>
      `
    },
    {
      title: "3. Iterative Prompting",
      content: `
        <p>Don't expect perfection on the first try. Iterate:</p>
        <ol>
            <li>Start with a broad goal.</li>
            <li>Review the output.</li>
            <li>Refine the prompt by adding constraints or clarifying details.</li>
            <li>Repeat until satisfied.</li>
        </ol>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Prompt Engineering for GitHub Copilot", url: "https://docs.github.com/en/copilot/concepts/prompting/prompt-engineering" },
        { text: "Best Practices for AI Coding Assistants", url: "https://engineering.axur.com/2025/05/09/best-practices-for-ai-assisted-coding.html" },
        { text: "Write Effective Prompts for Copilot", url: "https://learn.microsoft.com/en-us/azure/copilot/write-effective-prompts" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Convert vague prompts to specific ones and compare results</li>
          <li>Practice the "start general, then get specific" approach</li>
          <li>Use role prompting: "You are a senior Python developer. Create a secure authentication system..."</li>
          <li>Experiment with different prompt styles for the same task</li>
        </ol>
      `
    }
  ]
};
