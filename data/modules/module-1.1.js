export const moduleContent = {
  id: "module-1.1",
  title: "Understanding GitHub Copilot",
  description: "Learn what GitHub Copilot is, how it works, and the ethical considerations of using AI in software development.",
  objectives: [
    "Understand what GitHub Copilot is and how it works",
    "Learn about different Copilot plans (Free, Individual, Business, Enterprise)",
    "Explore responsible AI usage and ethical considerations"
  ],
  sections: [
    {
      title: "1. What is GitHub Copilot?",
      content: `
        <p>GitHub Copilot is an AI-powered coding assistant that helps you write code faster and with less effort. It draws context from comments and code to suggest individual lines and whole functions instantly.</p>
        <div class="card">
          <h3>How it works</h3>
          <p>Copilot uses OpenAI's Codex model to analyze the context in your active file and related files. It sends this context to the GitHub Copilot service, which returns suggestions.</p>
          <div class="language-javascript1">
          // Example: Copilot can generate a function from a comment
          <br/>// Calculate the number of days between two dates
          <br/>  function calculateDaysBetweenDates(begin, end) {
          <br/>   const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          <br/>    const firstDate = new Date(begin);
          <br/>    const secondDate = new Date(end);
          <br/>    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
          <br/>  }
          </div>
        </div>
      `
    },
    {
      title: "2. Copilot Plans",
      content: `
        <p>GitHub Copilot is available in several plans tailored to different needs:</p>
        <ul>
          <li><strong>Copilot Free</strong>: For students, teachers, and open-source maintainers.</li>
          <li><strong>Copilot Individual</strong>: For individual developers ($10/month).</li>
          <li><strong>Copilot Business</strong>: For organizations with seat management and policy controls.</li>
          <li><strong>Copilot Enterprise</strong>: For large enterprises needing customized AI models and advanced security.</li>
        </ul>
      `
    },
    {
      title: "3. Responsible AI & Ethics",
      content: `
        <p>Using AI in development comes with responsibilities. Microsoft is a global leader in Responsible AI, identifying six key principles that should guide AI development and usage. These principles are:</p>
        <ul>
        <li><strong>Fairness</strong>: AI systems should treat all people fairly.</li>
        <li><strong>Reliability and safety</strong>: AI systems should perform reliably and safely.</li>
        <li><strong>Privacy and security</strong>: AI systems should be secure and respect privacy.</li>
        <li><strong>Inclusiveness</strong>: AI systems should empower everyone and engage people.</li>
        <li><strong>Transparency</strong>: AI systems should be understandable.</li>
        <li><strong>Accountability</strong>: People should be accountable for AI systems.</li>
        </ul>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Introduction to GitHub Copilot - Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/" },
        { text: "Responsible AI with GitHub Copilot", url: "https://learn.microsoft.com/en-us/training/modules/responsible-ai-github-copilot/" },
        { text: "Responsible AI with GitHub Copilot PDF", url: "./docs/responsible-ai-github-copilot.pdf" },
        { text: "GitHub Copilot Documentation", url: "https://docs.github.com/en/copilot" }
      ]
    },
    {
      title: "Practical Exercise",
      content: "<ul><li>Read the official documentation on how Copilot handles data and privacy</li><li>Watch: 'Getting started with GitHub Copilot Tutorial'</li></ul>"
    }
  ]
};
