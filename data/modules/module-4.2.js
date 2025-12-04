export const moduleContent = {
  id: "module-4.2",
  title: "Code Refactoring & Optimization",
  description: "Improve your existing code base by using Copilot to refactor and optimize.",
  objectives: [
    "Use Copilot for code refactoring",
    "Optimize existing code for performance",
    "Apply design patterns with AI assistance"
  ],
  sections: [
    {
      title: "1. Refactoring with Chat",
      content: `
        <p>Select a block of code and ask Copilot to improve it.</p>
        <div class="card">
            <h3>Common Refactoring Prompts</h3>
            <ul>
                <li>"Refactor this to use async/await instead of callbacks."</li>
                <li>"Extract this logic into a separate helper function."</li>
                <li>"Simplify this complex conditional logic."</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Optimization Example",
      content: `
        <p><strong>Original Code:</strong></p>
        <pre><code class="language-javascript">const findDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}</code></pre>
        <p><strong>Prompt:</strong> "Optimize this function for large arrays."</p>
        <p><strong>Copilot Suggestion:</strong></p>
        <pre><code class="language-javascript">const findDuplicates = (arr) => {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return Array.from(duplicates);
}</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Code Refactoring with Copilot", url: "https://www.youtube.com/watch?v=SLMfhuptCo8" },
        { text: "Best Practices for AI Coding", url: "https://graphite.com/guides/best-practices-ai-coding-assistants" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Refactor a synchronous function to use promises/async-await</li>
          <li>Optimize a slow algorithm using Copilot suggestions</li>
          <li>Apply SOLID principles to existing code with Copilot assistance</li>
        </ol>
      `
    }
  ]
};
