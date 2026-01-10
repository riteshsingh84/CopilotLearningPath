export const moduleContent = {
  id: "module-3.1",
  title: "Crafting Effective Prompts",
  description: `Learn the art of prompt engineering to get the best results from GitHub Copilot.
   This module explored how to maximize GitHub Copilot’s potential through effective prompting.
   Prompt engineering is both an art and a science critical for achieving precise, context-aware code suggestions and improving overall developer productivity.`,
  objectives: [
    "<strong>Prompt Engineering Principles & Best Practices:</strong> How Copilot interprets prompts and delivers relevant responses.",
    "<strong>Copilot’s Processing Flow:</strong> Understanding how prompts are transformed into code suggestions and chat responses.",
    "<strong>Data Flow & Security:</strong> How Copilot handles prompt data securely, including filtering and transmission safeguards.",
    "<strong>Principles of prompt engineering:</strong> The 4 Ss - Single, Specific, Short, Surround.",
    "<strong>GCES Framework:</strong> Use the Goal-Context-Expectations-Source (GCES) framework.",
    "<strong>Iterative Prompting:</strong> Techniques for refining prompts based on Copilot’s outputs."
  ],
  sections: [
     {
      title: "1. Principles of prompt engineering",
      content: `
        <p>Before we explore specific strategies, let's first understand the basic principles of prompt engineering, summed up in the 4 Ss below. These core rules are the basis for creating effective prompts.</p>
        <div class="card">
            <ul>
                <li><strong>Single</strong>: Always focus your prompt on a single, well-defined task or question. This clarity is crucial for eliciting accurate and useful responses from Copilot.</li>
                <li><strong>Specific</strong>: Ensure that your instructions are explicit and detailed. Specificity leads to more applicable and precise code suggestions.?</li>
                <li><strong>Short</strong>: While being specific, keep prompts concise and to the point. This balance ensures clarity without overloading Copilot or complicating the interaction.</li>
                <li><strong>Surround</strong>: Utilize descriptive filenames and keep related files open. This provides Copilot with rich context, leading to more tailored code suggestions.</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. The GCES Framework",
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
      title: "3. Prompt Examples",
      content: `
        <p>Compare a weak prompt with a strong one:</p>
        <div class="card">
            <h4>Weak Prompt</h4>
            <code class="language-plaintext">Write a function to fetch data</code>
            
            <h4>Strong Prompt</h4>
            <code class="language-plaintext"> Write an async TypeScript function to
              <br/>fetch user data from /api/users.
              <br/>It should handle 404 and 500 errors using a try-catch block.
              <br/>Return a User interface object.</code>
        </div>
      `
    },
    {
      title: "4. Iterative Prompting",
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
        { text: "Download Prompt Engineering with GitHub Copilot", url: "https://github.com/riteshsingh84/CopilotLearningPath/blob/main/docs/Introduction-to-Prompt-Engineering-with-GitHub-Copilot.pdf" },
        { text: "Prompt Engineering - GitHub Copilot Fundamentals Part 1 of 2", url: "https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/" },
        { text: "Download Google Prompt Engineering Whitepaper", url: "https://github.com/riteshsingh84/CopilotLearningPath/blob/main/docs/Google_Prompt_Engineering_Whitepaper.pdf" },
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
