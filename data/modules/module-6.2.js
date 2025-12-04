export const moduleContent = {
  id: "module-6.2",
  title: "Code Quality & Review",
  description: "Maintain high standards by integrating Copilot into your code review and quality assurance processes.",
  objectives: [
    "Maintain high code quality standards",
    "Use Copilot for code reviews",
    "Implement automated quality gates"
  ],
  sections: [
    {
      title: "1. AI in Code Review",
      content: `
        <p>Use Copilot to review your own code before submitting a PR.</p>
        <div class="card">
            <h3>Self-Review Checklist</h3>
            <ul>
                <li>"Are there any potential bugs in this function?"</li>
                <li>"Is this code readable? How can I improve variable names?"</li>
                <li>"Does this handle all edge cases?"</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Automated Quality Gates",
      content: `
        <p>Ensure AI-generated code meets your standards by enforcing linting and testing in CI/CD.</p>
        <pre><code class="language-yaml"># .github/workflows/ci.yml
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Linter
        run: npm run lint
      - name: Run Tests
        run: npm test</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Best Practices for Coding with AI", url: "https://blog.codacy.com/best-practices-for-coding-with-ai" },
        { text: "Code Quality with Copilot", url: "https://www.browserstack.com/guide/ai-debugging-tools" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Set up automated code quality checks in your CI/CD pipeline</li>
          <li>Create a code review checklist for AI-generated code</li>
          <li>Review and improve code quality on a sample project</li>
        </ol>
      `
    }
  ]
};
