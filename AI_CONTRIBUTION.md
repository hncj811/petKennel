# AI Contribution Statement

**Required with every "Open" assignment submission** (see the Assessment Calendar in the course schedule — this does not apply to AI-Free assessments like Live Extension Labs or Oral Defenses, where no AI use is permitted at all).

Copy this file into your repo as `AI_CONTRIBUTION.md` and fill in all four sections before you submit. Keep it short — a few sentences per section is plenty. This is not a report card; it's a reflection, and it's graded on completion and honesty, not on how much or how little you used AI.

---

## 1. Tools used

Name the specific AI tool(s) you used (e.g. ChatGPT, Claude, GitHub Copilot) and, if you know it, which model.

*Example: "Claude (Sonnet), used in the browser. Also used GitHub Copilot's inline autocomplete while writing the component files."*

I used ChatGPT (GPT-5.6 Sol) in the browser while working on this assignment. I used it over the course of several days as I worked through the project step by step.

## 2. Prompts

Briefly describe the kind of help you asked for — not a verbatim transcript, just enough for a reader to understand how you used it. Debugging a specific error? Generating boilerplate? Explaining a concept from the book? Asking it to review your code?

*Example: "Asked it to explain why my `.map()` wasn't re-rendering when state changed. Asked it to generate the initial CSS for the card layout, which I then modified by hand."*

I used ChatGPT more like a tutor while I worked instead of asking it to complete the whole assignment at once. I would work on one part, test it, ask questions when I got stuck, and then come back later to work on the next part.

I asked for help setting up Docker with WSL/Ubuntu, understanding errors in the terminal, and understanding React concepts like state, props, `.map()`, `setState()`, and callbacks. I also asked it to review code with me, help find and choose the pet images, and help organize my README.

One example of the type of prompt I used was:

> "Break Docker image down vs container more plainly."

As I got further into the assignment, my questions changed from just trying to get the project working to trying to understand why it worked. I also specifically asked ChatGPT to help me learn the project well enough that I can eventually do it cold without AI. My plan is to go back through the finished project and visually map out the files, functions, state, props, and callbacks the same way I would plan a program before writing the code.

I also asked ChatGPT to walk me through the Git and GitHub submission process one step at a time. We checked my changes before committing so I could understand what was actually being added to my submission instead of just using `git add .` and pushing everything.

## 3. What it got wrong

Name at least one concrete thing the AI got wrong, misunderstood, or produced that didn't actually work — and how you noticed and fixed it. If nothing it gave you was wrong, that's worth saying too, but push yourself to look closely; this section is the one that shows you actually read and tested what you were given rather than pasting it in.

*Example: "It suggested mutating state directly with `.push()`, which the book explicitly warns against — I caught it because the list wouldn't re-render, and replaced it with `.concat()`."*

ChatGPT originally thought the Docker setup using Node 18 should work. I followed the process and actually ran the project, but Vite gave me an error because the Node version was too old. I caught the problem from the error in my terminal instead of assuming the AI was right. I changed the Dockerfile from Node 18 to Node 24, rebuilt the project, and it worked.

Another problem happened when changes I made in VS Code were not showing up in the browser. At first we thought Docker might still be using the old code. I checked the actual saved file from the terminal and found that I had not saved my changes in VS Code. After I saved the file and rebuilt the project, the changes appeared.

These problems helped me learn that AI can give me a direction, but I still have to run the code, read the errors, and check what is actually happening.

## 4. Reflection

2–3 sentences on what you learned, or how using the tool changed (or didn't change) your understanding of the code you submitted. Could you explain every line of your submission without the AI's help?

At the beginning of this assignment, I was mainly focused on getting everything set up and getting the app to work. By working through it step by step and revisiting it over several days, I started understanding how the pieces connect. I now understand that the parent holds the state, props pass information to the child, the button uses a callback to send the pet's ID back to the parent, and the parent changes the state so React can update the screen.

I cannot build this entire project cold yet without looking at my code or notes, and I want to be honest about that. Getting to that point is actually one of the things I asked AI to help me with. Now that the project works, I want to go back through it, map out how everything connects, and practice it until I can explain what every part does and why I used it.

The biggest thing I learned from using AI on this assignment is that getting working code is not the same thing as understanding the code. I am still working toward being able to do this on my own, but I understand much more now than I did when I started because I see that bigger picture of what the assignment was meant to do.

---

*Why this exists: using AI well is a skill, and the fastest way to lose that skill is to stop noticing when it's wrong. This statement is graded on whether it's honest and specific, not on how it makes your AI usage look.*
