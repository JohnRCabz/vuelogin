# VIPTutors

## Project Setup

To install the project dependencies, run:

```sh
npm install
```

### Compiles and Hot-Reloads for Development

To start the development server with hot-reloading, run:

```sh
npm run serve
```

Links
http://localhost:8080/login
http://localhost:8080/

## Coding Practices

### State Management
We use **Pinia** for state management. The state is defined in `taskStore.js`. This store manages the tasks and provides actions to **add, toggle, and delete tasks**.

### Component-Based Architecture
The project follows a **component-based architecture**. Each component is responsible for a specific part of the UI. For example:
- **Navbar** component: Located in `Navbar.vue`
- **Main application layout**: Defined in `App.vue`

### Routing
We use **Vue Router** for navigation between different views. The routes are defined in `index.js`. The application has three main routes:
- `TaskList`
- `CompletedTasks`
- `Login`

### Styling
We use **Tailwind CSS** for styling.
- **Configuration file**: `tailwind.config.js`
- **Main stylesheet**: `tailwind.css`

### Scoped Styles
We use **scoped styles** in Vue components to ensure that styles are applied only to the component they are defined in. This helps avoid style conflicts and makes the components more modular.

### Local Storage
Tasks are persisted in the browser's **local storage**. The `taskStore` handles saving and loading tasks from local storage to ensure they are retained even after a page refresh.

### Form Handling and Validation
- The **login form** in `LoginPage.vue` uses Vue's **reactive properties** to handle form input and validation.
- The **CAPTCHA** is generated and validated on the **client side** to enhance security.

### Responsive Design
The application is designed to be **responsive** and works well on different screen sizes. **Tailwind CSS** utility classes are used to ensure the layout adapts to various devices.

## Code Quality
We follow best practices for code quality, including:
- Using **meaningful variable and function names**.
- Keeping **components small** and focused on a **single responsibility**.
- Using Vue's **Composition API** for better code organization and reusability.
- Writing **modular and reusable code**.

## Version Control
We use **Git** for version control.
- The `.gitignore` file is configured to **exclude unnecessary files and directories**, such as:
  - `node_modules`
  - Build artifacts
  - Local environment files

## Browser Compatibility
The project is configured to support **modern browsers** as specified in the `.browserslistrc` file. This ensures the application works consistently across different browsers.

## Configuration
The project configuration is managed through various configuration files, including:
- `jsconfig.json`
- `postcss.config.js`
- `tailwind.config.js`

These files help in setting up the **development environment** and **build process**.

