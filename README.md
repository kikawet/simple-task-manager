# Simple Task Manager

Simple Task Manager is a web-based application designed for straightforward task management. Utilizing the localStorage feature, it ensures the persistence of data across sessions, providing a seamless and user-friendly experience.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

Before proceeding with the installation of dependencies, make sure you have Node version 18.18.0 or later and pnpm version 8.10.2 installed on your system. Once the prerequisites are met, execute the following command to install the project dependencies:

```sh
pnpm install
```

This will ensure a smooth setup process, utilizing the specified versions of Node and pnpm for a consistent development environment.

### Compile and Hot-Reload for Development

To start the project in development mode, use the following command:

```sh
pnpm dev
```

This command initiates the compilation process and enables hot-reloading, facilitating a seamless development experience. Any changes made to the code will automatically trigger a reload, allowing you to preview and test your modifications instantly.

## Project Design and Technologies

### Vue 3 with Composition API and Vite

The project has been developed using Vue 3, showcasing a commitment to leveraging the latest advancements in the Vue.js framework. Vue 3 brings notable improvements in performance, a more flexible component system, and enhanced reactivity. Developers benefit from the latest features and optimizations provided by the Vue.js ecosystem.

For an efficient and modern development process, the project utilizes Vite as its build tool. Vite's emphasis on speed during development is achieved through features like server-side rendering (SSR) and an efficient development server. This choice ensures a smoother development experience and reduced build times, enhancing overall project efficiency.

### Functionalities Separated into Multiple Routes

The project adopts a modular approach by organizing functionalities into distinct routes. This enhances modularity and facilitates the creation of a clear, organized structure within the application. Each route encapsulates specific features or sections, making it easier to understand and maintain

The separation of functionalities into routes also positively influences the user experience. Users can easily navigate different sections of the application, leading to a more intuitive and user-friendly interface.

### Pinia for State Management

For efficient state management, the project utilizes Pinia, a dedicated state management library for Vue.js. Pinia seamlessly integrates with Vue 3, aligning with its reactivity system for consistent and efficient state management.

Pinia stands out for its ease of use. Developers can define and access global application state effortlessly, streamlining the process of managing and sharing data between components. This simplicity accelerates development cycles and improves overall code maintainability.

### Tailwind CSS for Styling

To streamline and enhance the styling process, the project leverages Tailwind CSS. Tailwind CSS is a utility-first CSS framework that provides a set of pre-built utility classes, allowing for rapid and flexible styling without the need for custom CSS. This approach promotes consistency in styling across the application while offering the flexibility to customize styles as needed. Tailwind CSS integrates seamlessly with Vue.js, contributing to a more efficient and maintainable styling workflow within the project.
