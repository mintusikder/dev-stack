# Dev Stack Builder

A responsive Dev Stack Builder website where users can explore modern web technologies and create their own development stack.

## Live Website

[Live Demo](https://dev-stack-lyart.vercel.app)

## Project Overview

Dev Stack Builder is a React-based website designed to help developers explore different technologies and select the tools they want to use in their development journey.

Users can view technology details, add technologies to their personal stack, remove individual technologies, or clear the entire stack.

## Technologies Used

* React
* Vite
* JavaScript
* Tailwind CSS
* React Icons
* React Toastify
* JSON
* Git and GitHub

## Main Features

1. **Responsive Navbar**

   * Desktop and mobile navigation
   * Navigation links
   * Sign In and Sign Up buttons
   * Mobile hamburger menu

2. **Technology Cards**

   * Displays all technologies from a local JSON file
   * Technology icon
   * Badge
   * Name and description
   * Category and difficulty
   * Rating with star
   * Add to Stack button
   * Responsive card layout

3. **Your Stack Sidebar**

   * Shows selected technology count
   * Displays selected technologies
   * Remove individual technology
   * Remove All functionality
   * Empty stack state

4. **Interactive Stack Management**

   * Prevents duplicate technologies
   * Shows success and warning toast messages
   * Updates selected count dynamically
   * Disables the button after adding a technology

5. **Loading State**

   * Shows loading message and spinner while fetching JSON data
   * Displays technology cards after data is loaded

6. **Responsive Design**

   * Mobile-friendly layout
   * Tablet-friendly layout
   * Desktop layout
   * Responsive technology card grid

## Project Structure

```text
dev-stack/
├── public/
│   └── data/
│       └── technologies.json
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── TechnologyGrid.jsx
│   │   ├── YourStack.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vite.config.js
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project folder

```bash
cd dev-stack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local website

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Data Source

Technology information is loaded from:

```text
public/data/technologies.json
```

Each technology object contains:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A JavaScript library for building user interfaces.",
  "icon": "icon-url",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

## React Questions and Answers

### 1. What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const heading = <h1>Hello React</h1>;
```

JSX makes React components easier to write and understand.

### 2. What is the difference between State and Props?

**State** is internal data managed by a component. State can change over time.

**Props** are data passed from a parent component to a child component.

Example:

```jsx
<TechnologyCard technology={technology} />
```

Here, `technology` is passed as a prop.

### 3. What is `useState`?

`useState` is a React Hook used to create and manage component state.

Example:

```jsx
const [count, setCount] = useState(0);
```

* `count` stores the current value.
* `setCount` updates the value.

### 4. What is `useEffect`?

`useEffect` is a React Hook used to perform side effects, such as:

* Fetching data
* Calling APIs
* Updating document title
* Setting up subscriptions

Example:

```jsx
useEffect(() => {
  fetch("/data/technologies.json");
}, []);
```

### 5. What is a custom Hook?

A custom Hook is a reusable JavaScript function that uses one or more React Hooks.

Custom Hooks usually start with the word `use`.

Example:

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}
```

### 6. What is conditional rendering?

Conditional rendering means displaying different UI based on a condition.

Example:

```jsx
{loading ? (
  <p>Loading...</p>
) : (
  <TechnologyGrid />
)}
```

If `loading` is true, the loading message appears. Otherwise, the technology grid appears.

### 7. Why is the `key` prop used in React?

The `key` prop helps React identify which items have changed, been added, or been removed from a list.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

A unique key improves React's rendering performance and prevents list-related problems.

## Future Improvements

* Add search functionality
* Add technology category filtering
* Add dark mode
* Add user authentication
* Save selected stack to local storage
* Add technology details page

## Author

Created by **Your Name**

## License

This project is created for educational purposes.
