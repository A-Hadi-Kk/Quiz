#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bold.underline.green("\n\t\t\tPROGRAMING  LANGUAGES  QUIZZES\n"))
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const programmingLanguageQuizzes: Record<string, Question[]> = {
  'HTML': [
    {
      question: chalk.bold.magenta.italic("What does HTML stand for?"),
      options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hypertext Management Language"],
      correctAnswer: "Hypertext Markup Language"
    },
    {
      question: chalk.bold.magenta.italic("What is the correct HTML element for inserting a line break?"),
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: "<br>"
    },
    {
      question: chalk.bold.magenta.italic("What is the correct HTML element for the largest heading?"),
      options: ["<h1>", "<heading>", "<h6>", "<h>"],
      correctAnswer: "<h1>"
    },
    {
      question: chalk.bold.magenta.italic("Which attribute specifies the URL of the page the link goes to?"),
      options: ["href", "src", "link", "url"],
      correctAnswer: "href"
    },
    {
      question: chalk.bold.magenta.italic("What does the <a> element define?"),
      options: ["Anchor", "Image", "Paragraph", "Link"],
      correctAnswer: "Link"
    },
    {
      question:chalk.bold.magenta.italic("Which HTML attribute is used to define inline styles?"),
      options: ["style", "class", "font", "color"],
      correctAnswer: "style"
    },
    {
      question: chalk.bold.magenta.italic("How can you make a numbered list?"),
      options: ["<ul>", "<ol>", "<list>", "<li>"],
      correctAnswer: "<ol>"
    },
    {
      question: chalk.bold.magenta.italic("What is the correct HTML for adding a background color?"),
      options: ["<background>", "<color>", "<bgcolor>", "<bodycolor>"],
      correctAnswer: "<bgcolor>"
    },
    {
      question: chalk.bold.magenta.italic("Which HTML element is used to define important text?"),
      options: ["<important>", "<bold>", "<strong>", "<emphasis>"],
      correctAnswer: "<strong>"
    },
    {
      question: chalk.bold.magenta.italic("What does CSS stand for?"),
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    }
  ],
  'CSS': [
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the text color of an element?"),
      options: ["color", "text-color", "font-color", "bgcolor"],
      correctAnswer: "color"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the background color of an element?"),
      options: ["bgcolor", "background-color", "color", "text-color"],
      correctAnswer: "background-color"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the font size of an element?"),
      options: ["size", "font-size", "text-size", "font-style"],
      correctAnswer: "font-size"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the font style of an element?"),
      options: ["style", "font-style", "text-style", "font-family"],
      correctAnswer: "font-style"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the left margin of an element?"),
      options: ["margin", "margin-left", "left-margin", "padding-left"],
      correctAnswer: "margin-left"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the right margin of an element?"),
      options: ["margin-right", "right-margin", "margin", "padding-right"],
      correctAnswer: "margin-right"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the top margin of an element?"),
      options: ["margin-top", "top-margin", "margin", "padding-top"],
      correctAnswer: "margin-top"
    },
    {
      question: chalk.bold.magenta.italic("Which CSS property is used to change the text alignment of an element?"),
      options: ["align", "text-align", "alignment", "text-style"],
      correctAnswer: "text-align"
    },
    {
      question: chalk.bold.magenta.italic("What does CSS define?"),
      options: ["Style presentation of HTML elements", "Behavior of HTML elements", "Data storage of HTML elements", "Interactivity of HTML elements"],
      correctAnswer: "Style presentation of HTML elements"
    }
  ],
  'TypeScript': [
    {
      question: chalk.bold.magenta.italic("What is TypeScript?"),
      options: ["A programming language", "A markup language", "A scripting language", "A style sheet language"],
      correctAnswer: "A programming language"
    },
    {
      question: chalk.bold.magenta.italic("Which keyword is used to define a variable in TypeScript?"),
      options: ["let", "const", "var", "type"],
      correctAnswer: "let"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of TypeScript?"),
      options: ["To enhance JavaScript", "To replace JavaScript", "To compete with JavaScript", "To simplify JavaScript"],
      correctAnswer: "To enhance JavaScript"
    },
    {
      question: chalk.bold.magenta.italic("Which keyword is used to define a function in TypeScript?"),
      options: ["func", "function", "def", "define"],
      correctAnswer: "function"
    },
    {
      question: chalk.bold.magenta.italic("What does TypeScript add to JavaScript?"),
      options: ["Type annotations", "Comments", "Keywords", "HTML tags"],
      correctAnswer: "Type annotations"
    },
    {
      question: chalk.bold.magenta.italic("What tool is used to compile TypeScript code to JavaScript?"),
      options: ["tsc", "tslint", "tsconfig", "typescript"],
      correctAnswer: "tsc"
    },
    {
      question: chalk.bold.magenta.italic("What is the file extension for TypeScript files?"),
      options: [".ts", ".js", ".css", ".html"],
      correctAnswer: ".ts"
    },
    {
      question: chalk.bold.magenta.italic("What does TypeScript support that JavaScript does not?"),
      options: ["Static typing", "Dynamic typing", "Loose typing", "Weak typing"],
      correctAnswer: "Static typing"
    },
    {
      question: chalk.bold.magenta.italic("Which feature of TypeScript helps in catching errors during development?"),
      options: ["Type checking", "Syntax highlighting", "Code folding", "Debugging"],
      correctAnswer: "Type checking"
    },
    {
      question: chalk.bold.magenta.italic("What does TypeScript compile down to?"),
      options: ["JavaScript", "HTML", "CSS", "Python"],
      correctAnswer: "JavaScript"
    }
  ],
  'Python': [
    {
      question: chalk.bold.magenta.italic("What is Python?"),
      options: ["A programming language", "A markup language", "A scripting language", "A style sheet language"],
      correctAnswer: "A programming language"
    },
    {
      question: chalk.bold.magenta.italic("Which keyword is used to define a variable in Python?"),
      options: ["let", "const", "var", "type"],
      correctAnswer: "var"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of Python?"),
      options: ["General-purpose programming", "Web development", "Data science", "Game development"],
      correctAnswer: "General-purpose programming"
    },
    {
      question: chalk.bold.magenta.italic("Which keyword is used to define a function in Python?"),
      options: ["func", "function", "def", "define"],
      correctAnswer: "def"
    },
    {
      question: chalk.bold.magenta.italic("What is the file extension for Python files?"),
      options: [".py", ".js", ".css", ".html"],
      correctAnswer: ".py"
    },
    {
      question: chalk.bold.magenta.italic("Which feature of Python helps in catching errors during development?"),
      options: ["Exception handling", "Syntax highlighting", "Code folding", "Debugging"],
      correctAnswer: "Exception handling"
    },
    {
      question: chalk.bold.magenta.italic("Which tool is used to run Python code?"),
      options: ["Python interpreter", "JavaScript interpreter", "Node.js", "Python compiler"],
      correctAnswer: "Python interpreter"
    },
    {
      question: chalk.bold.magenta.italic("What is the Python standard library?"),
      options: ["A collection of modules", "A compiler", "An IDE", "A framework"],
      correctAnswer: "A collection of modules"
    },
    {
      question: chalk.bold.magenta.italic("Which framework is used for web development in Python?"),
      options: ["Django", "React", "Angular", "Vue.js"],
      correctAnswer: "Django"
    },
    {
      question: chalk.bold.magenta.italic("What is the syntax for a single-line comment in Python?"),
      options: ["# Comment", "// Comment", "/* Comment */", "<!-- Comment -->"],
      correctAnswer: "# Comment"
    }
  ],
  'JavaScript': [
    {
      question: chalk.bold.magenta.italic("What does the '===' operator do in JavaScript?"),
      options: ["Compares both value and type", "Compares only value", "Compares only type", "Assigns a value"],
      correctAnswer: "Compares both value and type"
    },
    {
      question: chalk.bold.magenta.italic("Which of the following is not a JavaScript data type?"),
      options: ["Boolean", "String", "Float", "Number"],
      correctAnswer: "Float"
    },
    {
      question: chalk.bold.magenta.italic("What is the result of typeof null in JavaScript?"),
      options: ["'object'", "'null'", "'undefined'", "'string'"],
      correctAnswer: "'object'"
    },
    {
      question: chalk.bold.magenta.italic("What does the '||' operator do in JavaScript?"),
      options: ["Logical OR", "Logical AND", "Logical NOT", "Bitwise OR"],
      correctAnswer: "Logical OR"
    },
    {
      question: chalk.bold.magenta.italic("What is the output of 1 + '1' in JavaScript?"),
      options: ["'11'", "'2'", "11", "2"],
      correctAnswer: "'11'"
    },
    {
      question: chalk.bold.magenta.italic("What does the Array.prototype.map() method do in JavaScript?"),
      options: ["Creates a new array with the results of calling a function for every array element", "Adds a new element to the end of an array", "Removes the last element of an array", "Sorts the elements of an array"],
      correctAnswer: "Creates a new array with the results of calling a function for every array element"
    },
    {
      question: chalk.bold.magenta.italic("What is the output of [] + [] in JavaScript?"),
      options: ["''", "'[]'", "[]", "' '"],
      correctAnswer: "''"
    },
    {
      question: chalk.bold.magenta.italic("Which keyword is used to declare a function in JavaScript?"),
      options: ["function", "method", "func", "define"],
      correctAnswer: "function"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of the 'return' statement in a JavaScript function?"),
      options: ["To specify the value that the function returns", "To terminate the function and return undefined", "To break out of a loop", "To throw an error"],
      correctAnswer: "To specify the value that the function returns"
    },
    {
      question: chalk.bold.magenta.italic("What does the 'typeof' operator do in JavaScript?"),
      options: ["Returns the type of a variable or expression", "Returns the size of a variable or expression", "Returns the value of a variable or expression", "Returns the memory address of a variable or expression"],
      correctAnswer: "Returns the type of a variable or expression"
    }
  ],
  // Next.js questions
  'Next.js': [
    {
      question: chalk.bold.magenta.italic("What is Next.js?"),
      options: ["A React framework", "A JavaScript library", "A CSS framework", "A database"],
      correctAnswer: "A React framework"
    },
    {
      question: chalk.bold.magenta.italic("Which command is used to create a new Next.js app?"),
      options: ["create-next-app", "npm init next-app", "next-create-app", "next new"],
      correctAnswer: "create-next-app"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of the 'pages' directory in a Next.js project?"),
      options: ["To define the pages of the application", "To store configuration files", "To install dependencies", "To serve static assets"],
      correctAnswer: "To define the pages of the application"
    },
    {
      question:chalk.bold.magenta.italic("What does SSR stand for in the context of Next.js?"),
      options: ["Server-Side Rendering", "Single-Page Routing", "Static Site Rendering", "Server-Side Routing"],
      correctAnswer: "Server-Side Rendering"
    },
    {
      question: chalk.bold.magenta.italic("Which file is used to configure routing in a Next.js application?"),
      options: ["_app.js", "_document.js", "routes.js", "_router.js"],
      correctAnswer: "routes.js"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of the 'getServerSideProps' function in Next.js?"),
      options: ["To fetch data at runtime and pass it to the component", "To define server-side routes", "To handle form submissions", "To define global CSS styles"],
      correctAnswer: "To fetch data at runtime and pass it to the component"
    },
    {
      question: chalk.bold.magenta.italic("Which command is used to start a Next.js development server?"),
      options: ["npm start", "next dev", "next start", "npm run dev"],
      correctAnswer: "npm run dev"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of the 'Link' component in Next.js?"),
      options: ["To enable client-side navigation between pages", "To define a link to an external website", "To include an image in a page", "To create a button"],
      correctAnswer: "To enable client-side navigation between pages"
    },
    {
      question: chalk.bold.magenta.italic("What does the 'fallback' option do in the 'getStaticPaths' function in Next.js?"),
      options: ["Specifies fallback behavior for dynamic routes", "Defines static paths for pre-rendering", "Enables incremental static regeneration", "Specifies caching options"],
      correctAnswer: "Specifies fallback behavior for dynamic routes"
    },
    {
      question: chalk.bold.magenta.italic("What is the purpose of the 'Image' component in Next.js?"),
      options: ["To optimize images for the web", "To include SVG graphics in a page", "To embed videos", "To create animations"],
      correctAnswer: "To optimize images for the web"
    }
  ]
};

async function chooseProgrammingLanguage(): Promise<string> {
  const { language } = await inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: chalk.yellow.bold.underline('Choose a programming language:'),
      choices: Object.keys(programmingLanguageQuizzes)
    }
  ]);
  return language;
}

async function startProgrammingLanguageQuiz(language: string) {
  const questions = programmingLanguageQuizzes[language];
  if (!questions) {
    console.log(chalk.red.bold('Invalid programming language.'));
    return;
  }

  let score = 0;

  for (const question of questions) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'answer',
        message: question.question,
        choices: question.options
      }
    ]);

    if (answer.answer === question.correctAnswer) {
      console.log(chalk.green.italic.bold('Correct!'));
      score++;
    } else {
      console.log(chalk.red.italic.bold('Incorrect!'));
      console.log(chalk.yellow.bold.italic("currect answer is :", question.correctAnswer))
    }
  }

  console.log(chalk.bold.italic.underline.magenta(`Quiz completed! Your score: ${score} out of ${questions.length}`));
}

async function main() {
  const selectedLanguage = await chooseProgrammingLanguage();
  await startProgrammingLanguageQuiz(selectedLanguage);
}

main();