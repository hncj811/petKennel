# Pet Kennel — React Class Components

A beginner React project that demonstrates **class-based components**, **state management**, and **props** by building an interactive pet kennel display.

---

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Running with Docker](#running-with-docker)
- [Assignment Requirements](#assignment-requirements)
- [Your README Assignment](#your-readme-assignment)
- [AI Contribution Statement](#ai-contribution-statement)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Description

Pet Kennel is a site with two pets. Both pets start out hungry. When you click the Feed Me button, the pet becomes switches to happy and the picture changes showing a happier pet.

I learned how information held in the parent travlels to the child component. I also learned STATE = REMEMBER/CHANGE,
PROPS = PASS, BUTTON = ACTION

- Creating **class-based React components**
- Lifting **state** up to a parent component
- Passing **props** and **callback functions** down to children
- Mapping over an **array** to render multiple components

---

## Demo

> _Add a screenshot or GIF here once your app is running._

#### Before Feeding the Pets

![Hungry Pets](screenshots/Hungry%20Pet.png)

#### After Feeding the Pets

![Happy Pets](screenshots/Happy%20Pet.png)

#### Browser Console Check

The browser console shows both pet buttons running without errors.

![Browser Console Check](screenshots/Browser%20Consol%20Check.png)
---
## Installation

This is how I got my Pet Kennel project set up and running. I used Windows, VS Code, Ubuntu through WSL, and Docker Desktop.

### What You Need

Before getting started, make sure you have:

- Git
- VS Code
- WSL with Ubuntu
- Docker Desktop

I used Node 24 inside Docker, so I did not need to install Node separately in Ubuntu.

### 1. Clone the Project

Open the Ubuntu terminal and clone the project:

```bash
git clone YOUR-GITHUB-REPO-LINK
```

Then go into the project folder:

```bash
cd petKennel
```

### 2. Open the Project in VS Code

From the project folder, run:

```bash
code .
```

### 3. Set Up Docker with Ubuntu

Open Docker Desktop and make sure it is running.

Since I used Ubuntu through WSL, I also had to turn on Docker's WSL integration.

In Docker Desktop:

1. Go to **Settings**
2. Go to **Resources**
3. Go to **WSL Integration**
4. Turn on integration for **Ubuntu**
5. Apply the changes

After doing this, Ubuntu was able to use Docker.

You can check that Docker is working from the Ubuntu terminal by running:

```bash
docker ps
```

### 4. Build and Run Pet Kennel

From the Pet Kennel folder in the Ubuntu terminal, run:

```bash
docker compose up --build
```

The first build may take a little longer because Docker has to download and install everything the project needs.

### 5. Open the App

Once everything is running, open a browser and go to:

`http://localhost:3000`

You should see Reggie and Penny. Both pets start out hungry and have a **Feed Me!** button.

### 6. Stop the App

When you are finished, press:

`Ctrl + C`

Then you can shut down the Docker container with:

```bash
docker compose down
```

### One Problem I Ran Into

The original Dockerfile used Node 18. When I tried to build the project, Vite would not run with that version of Node.

I changed the Dockerfile to use Node 24 and rebuilt the project. After that change, the app was able to run correctly.

----

## Usage

When the app first opens, Reggie and Penny are both hungry.

Each pet has their own **Feed Me** button. When I click the button, that pet changes from hungry to happy and their picture changes to a happy picture.

The other pet stays the same until I click their button too.

This helped me see how the child component can send information back to the parent and how the parent can update the pet's state.

----

## Technologies Used

## Technologies Used

### Hardware
- [Dell Computer](https://www.dell.com/)

### Software and Tools
- [Microsoft Windows](https://www.microsoft.com/windows)
- [WSL / Ubuntu](https://ubuntu.com/desktop/wsl)
- [Visual Studio Code](https://code.visualstudio.com/)
- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js 24](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [ChatGPT](https://chatgpt.com/)


## Getting Started

**Prerequisites:** Node.js v18+ and npm installed.

```bash
# 1. Fork this repository to your own GitHub account, then clone your fork
git clone <your-fork-url>
cd petKennel

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> **Why Vite?** This project uses [Vite](https://vitejs.dev/) instead of the deprecated Create React App. It starts nearly instantly and requires `.jsx` file extensions for components. The dev server defaults to **port 5173** — check your terminal output for the exact URL.

---

## Usage

1. Open the app in your browser.
2. Each pet card shows the pet's current image.
3. Click the button on a card to cycle to the next image.
4. State is managed in the parent component and passed down to children via props.

---

## Running with Docker

Requires [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

```bash
# Build and start the container
docker-compose up --build

# Stop the container
docker-compose down
```

The app will be available at `http://localhost:3000`.

---

## Assignment Requirements

**Fork this repo** to your own GitHub account before you start coding.

To receive full credit your submission must include the following:

### Coding Tasks

| # | File | Task |
|---|------|------|
| 1 | `App.jsx` | **State** — initialize `this.state` in the constructor using the data from `data.js` |
| 2 | `App.jsx` | **Mapping** — use `.map()` to render at least two `ChildComponent` cards from state |
| 3 | `App.jsx` | **Events** — implement a method that updates a pet's image/status, and pass it to each child via props |
| 4 | `ChildComponent.jsx` | **Child Logic** — display the props passed in and call the parent's method when the button is clicked |

### Submission Checklist

- [ ] Class-based parent component (`App.jsx`) holds and manages state
- [ ] At least one child component receives and renders props
- [ ] Button in the child triggers a state update in the parent via a callback prop
- [ ] Pet list rendered using `.map()` over state
- [ ] At least 2 pets with at least 2 images each
- [ ] App runs without errors in the browser console
- [ ] `README.md` completed (see below)
- [ ] `AI_CONTRIBUTION.md` completed (see below)

---

## Your README Assignment

Your submission **must include a `README.md`** following the structure at [makeareadme.com](https://www.makeareadme.com/). At minimum your README must contain:

| Section | What to include |
|---|---|
| **Title & Description** | What your project does and why |
| **Installation** | Step-by-step setup instructions |
| **Usage** | How to run and interact with the app |
| **Screenshots** | At least one screenshot of your running app |
| **Technologies Used** | List the libraries/tools you used |
| **License** | Choose a license (MIT is fine) |

> A good README is part of the grade. Treat it like documentation for a real project.

---

## AI Contribution Statement

This is an **Open** assignment, so AI use is permitted — but you **must** include an `AI_CONTRIBUTION.md` file in the root of your repo.

A blank template has been provided for you (`AI_CONTRIBUTION.md`). Fill in all four sections before you submit:

1. **Tools used** — which AI tool(s) and model(s) you used
2. **Prompts** — what kind of help you asked for
3. **What it got wrong** — at least one thing the AI got wrong and how you caught it
4. **Reflection** — what you learned and whether you could explain every line without AI help

Submissions missing `AI_CONTRIBUTION.md` will not receive full credit.

---

## Technologies Used

- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) _(optional)_

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
