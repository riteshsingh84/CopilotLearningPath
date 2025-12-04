export const moduleContent = {
  id: "module-8.1",
  title: "Hands-On Projects",
  description: "Apply your skills to build real-world applications and develop a portfolio of AI-assisted projects.",
  objectives: [
    "Apply learned skills to real-world scenarios",
    "Build complete applications with Copilot",
    "Develop a portfolio of AI-assisted projects"
  ],
  sections: [
    {
      title: "1. Project Ideas",
      content: `
        <p>Choose a project to build from scratch using Copilot.</p>
        <div class="card">
            <h3>Task Manager App</h3>
            <p><strong>Goal:</strong> Build a React/Node.js app to manage tasks.</p>
            <p><strong>Steps:</strong></p>
            <ol>
                <li>Scaffold the project with <code>create-react-app</code>.</li>
                <li>Use Copilot to generate the backend API.</li>
                <li>Use Copilot to style the frontend components.</li>
                <li>Write tests for both.</li>
            </ol>
        </div>
      `
    },
    {
      title: "2. Documentation",
      content: `
        <p>Document your process. It helps in learning and sharing.</p>
        <pre><code class="language-markdown"># Project Log

## Day 1
- Used Copilot to generate the database schema.
- **Insight**: Copilot suggested a better way to handle relationships than I planned.

## Day 2
- Struggled with a CSS bug.
- **Solution**: Used /fix in Chat to resolve the flexbox issue.</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Copilot in a Box - Sample Projects", url: "https://github.com/github-samples/copilot-in-a-box" },
        { text: "GitHub Copilot Challenges", url: "https://github.com/github-samples/copilot-hack" },
        { text: "Planning a Project with Copilot", url: "https://docs.github.com/en/copilot/tutorials/plan-a-project" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Complete the "Game of Life" walkthrough project</li>
          <li>Build a project from scratch using only natural language prompts</li>
          <li>Document your workflow and lessons learned</li>
        </ol>
      `
    }
  ]
};
