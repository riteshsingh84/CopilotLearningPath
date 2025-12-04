export const moduleContent = {
  id: "module-5.1",
  title: "Test Generation",
  description: "Ensure code reliability by automatically generating comprehensive test suites.",
  objectives: [
    "Generate unit tests with Copilot",
    "Create test cases for edge conditions",
    "Automate test creation workflows"
  ],
  sections: [
    {
      title: "1. Generating Unit Tests",
      content: `
        <p>Copilot can generate tests for your functions using the <code>/tests</code> command or by right-clicking.</p>
        <div class="card">
            <h3>Example</h3>
            <p><strong>Function:</strong></p>
            <pre><code class="language-javascript">function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}</code></pre>
            <p><strong>Prompt:</strong> "Generate Jest tests for this function, including invalid cases."</p>
            <p><strong>Result:</strong></p>
            <pre><code class="language-javascript">describe('isValidEmail', () => {
  test('should return true for valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('should return false for invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});</code></pre>
        </div>
      `
    },
    {
      title: "2. Edge Case Testing",
      content: `
        <p>Explicitly ask Copilot to consider edge cases:</p>
        <ul>
            <li>Null or undefined inputs</li>
            <li>Empty arrays or strings</li>
            <li>Large numbers or boundary values</li>
        </ul>
        <pre><code class="language-plaintext">Generate tests for calculateTax, focusing on negative inputs and zero values.</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Testing with GitHub Copilot", url: "https://docs.github.com/copilot/tutorials" },
        { text: "AI Testing and Debugging Tools", url: "https://www.browserstack.com/guide/ai-debugging-tools" },
        { text: "Testing and Debugging AI-Generated Code", url: "https://www.softwareseni.com/testing-and-debugging-ai-generated-code-systematic-strategies-that-work/" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Generate unit tests for a complex function</li>
          <li>Create integration tests for an API endpoint</li>
          <li>Build a test suite with 85%+ coverage using Copilot</li>
        </ol>
      `
    }
  ]
};
