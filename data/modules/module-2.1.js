export const moduleContent = {
  id: "module-2.1",
  title: "Inline Code Suggestions",
  description: "Master the core feature of GitHub Copilot: getting intelligent code suggestions as you type.",
  objectives: [
    "Understand how inline suggestions work",
    "Accept, reject, and cycle through suggestions",
    "Recognize when to use Copilot suggestions vs. writing manually"
  ],
  sections: [
    {
      title: "1. How Inline Suggestions Work",
      content: `
        <p>As you type, Copilot analyzes the code around your cursor and suggests completions in ghost text.</p>
        <div class="card">
            <h3>Example</h3>
            <p>Type the following and pause:</p>
            <pre><code class="language-javascript">function calculateAverage(numbers) {</code></pre>
            <p>Copilot will likely suggest:</p>
            <pre><code class="language-javascript">  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}</code></pre>
        </div>
      `
    },
    {
      title: "2. Controlling Suggestions",
      content: `
        <p>Use keyboard shortcuts to manage suggestions:</p>
        <ul>
          <li><strong>Tab</strong>: Accept the suggestion.</li>
          <li><strong>Esc</strong>: Dismiss the suggestion.</li>
          <li><strong>Alt + ]</strong> (Windows) / <strong>Option + ]</strong> (Mac): Next suggestion.</li>
          <li><strong>Alt + [</strong> (Windows) / <strong>Option + [</strong> (Mac): Previous suggestion.</li>
          <li><strong>Ctrl + Enter</strong>: Open GitHub Copilot Completions panel to see multiple suggestions at once.</li>
        </ul>
      `
    },
    {
      title: "3. When to Use Copilot",
      content: `
        <p>Copilot is best for:</p>
        <ul>
          <li>Boilerplate code (e.g., API calls, data structures).</li>
          <li>Common algorithms (e.g., sorting, searching).</li>
          <li>Writing tests (it's very good at pattern matching).</li>
        </ul>
        <p><em>Be careful with: Complex business logic or security-critical code where subtle bugs might be introduced.</em></p>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Getting Code Suggestions in Your IDE", url: "https://docs.github.com/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" },
        { text: "VS Code Copilot Tips and Tricks", url: "https://code.visualstudio.com/docs/copilot/copilot-tips-and-tricks" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Create a simple function (e.g., "function to validate email addresses")</li>
          <li>Write a comment describing functionality and let Copilot generate code</li>
          <li>Practice accepting and rejecting suggestions to understand quality</li>
          <li>Build a basic task manager web app following the VS Code tutorial</li>
        </ol>
      `
    }
  ]
};
