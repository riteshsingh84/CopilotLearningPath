export const moduleContent = {
  id: "module-6.1",
  title: "Security Best Practices",
  description: "Understand the security implications of AI-generated code and how to mitigate risks.",
  objectives: [
    "Understand security implications of AI-generated code",
    "Identify and fix common vulnerabilities",
    "Implement secure coding practices"
  ],
  sections: [
    {
      title: "1. Common Vulnerabilities",
      content: `
        <p>AI models can sometimes reproduce insecure patterns found in training data.</p>
        <div class="card">
            <h3>Watch out for:</h3>
            <ul>
                <li><strong>SQL Injection</strong>: Concatenating strings into queries instead of using parameters.</li>
                <li><strong>Hardcoded Secrets</strong>: API keys or passwords in code.</li>
                <li><strong>XSS</strong>: Rendering user input without escaping.</li>
            </ul>
        </div>
      `
    },
    {
      title: "2. Secure Coding Prompting",
      content: `
        <p>Explicitly ask for secure code:</p>
        <pre><code class="language-plaintext">Write a Python function to connect to a database using secure practices. 
Use environment variables for credentials.</code></pre>
        <p><strong>Result:</strong></p>
        <pre><code class="language-python">import os
import psycopg2

def get_db_connection():
    return psycopg2.connect(
        host=os.environ['DB_HOST'],
        database=os.environ['DB_NAME'],
        user=os.environ['DB_USER'],
        password=os.environ['DB_PASSWORD']
    )</code></pre>
      `
    },
    {
      title: "Resources",
      type: "links",
      items: [
        { text: "Security-Focused Guide for AI Code Assistants", url: "https://best.openssf.org/Security-Focused-Guide-for-AI-Code-Assistant-Instructions" },
        { text: "Enhancing Security with GitHub Copilot", url: "https://arxiv.org/pdf/2403.12671.pdf" },
        { text: "How to Catch Security Bugs in AI Code", url: "https://asymm.com/how-to-catch-security-bugs-in-ai-generated-code/" }
      ]
    },
    {
      title: "Practical Exercises",
      content: `
        <ol>
          <li>Review AI-generated code for security vulnerabilities</li>
          <li>Use Copilot to implement input validation and sanitization</li>
          <li>Create a security-focused custom instruction file</li>
        </ol>
      `
    }
  ]
};
