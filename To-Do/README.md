# To-Do List Project

This project is a simple To-Do List application built using React.js and styled with Tailwind CSS. The application allows users to add, edit, and delete tasks, as well as filter tasks based on their status (All, To-Do, Completed). Key React concepts such as `useState`, `useRef`, `useEffect`, and modals are utilized in this project.

## Features

- **Add New Tasks**: Users can add new tasks with details like description, category, date, and priority.
- **Edit Existing Tasks**: Users can edit the details of existing tasks.
- **Delete Tasks**: Users can remove tasks from the list.
- **Filter Tasks**: Users can filter tasks to show all tasks, only to-do tasks, or only completed tasks.
- **Task Completion**: Users can mark tasks as completed.

## Getting Started

### Prerequisites

Ensure you have Node.js installed. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installation

1. **Create a new Vite project**:
    ```bash
    npm create vite@latest
    ```

2. **Navigate to your project directory**:
    ```bash
    cd your-project-name
    ```

3. **Install Tailwind CSS and its dependencies**:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

4. **Initialize Tailwind CSS**:
    ```bash
    npx tailwindcss init -p
    ```

5. **Install necessary dependencies**:
    ```bash
    npm install
    ```

6. **Run the development server**:
    ```bash
    npm run dev
    ```

### Configuration

1. **Configure Tailwind CSS**:
    In your `tailwind.config.js` file, add the paths to all of your template files:
    ```js
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

2. **Add Tailwind CSS directives to your CSS**:
    In your `src/index.css` file, add the following:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### Project Structure

Here's an overview of the project's structure:
├── public
│ └── index.html
├── src
│ ├── components
│ │ └── FormModal.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

### How to Use

1. **Add a new task**: Click on the "Add a new To-do" button and fill in the task details in the modal that appears.
2. **Edit a task**: Click on the "Edit" button next to the task you want to edit, modify the task details in the modal, and save the changes.
3. **Delete a task**: Click on the "Delete" button next to the task you want to remove.
4. **Filter tasks**: Use the filter buttons ("All", "To-Do", "Completed") to filter tasks based on their status.
5. **Mark task as completed**: Check the checkbox next to the task to mark it as completed or to-do.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
