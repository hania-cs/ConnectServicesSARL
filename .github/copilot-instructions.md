# AI Agent Instructions for my-react-site

This document provides essential context for AI agents working in this codebase.

## Project Overview

This is a React application built with Vite, focusing on modern development practices and fast refresh capabilities. The project uses:

- React 19.1 with modern features
- Vite 7.1 as the build tool
- ESLint for code quality
- JSX for components (not TypeScript)

## Key Architecture Points

### Component Structure
- Main application entry: `src/main.jsx`
- Core app component: `src/App.jsx`
- Assets are stored in `src/assets/` and `public/`

### Development Workflow

#### Common Commands
```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint codebase
npm run lint
```

#### Hot Module Replacement (HMR)
The project is configured for Fast Refresh using @vitejs/plugin-react. Code changes in React components will trigger automatic updates without losing component state.

### Project Conventions

1. **Module System**
   - Uses ES Modules (type: "module" in package.json)
   - Import paths are relative to src/ for internal modules
   - SVG imports are supported as React components

2. **Styling**
   - CSS modules are supported
   - Global styles in `src/index.css`
   - Component-specific styles in `src/App.css`

3. **Asset Handling**
   - Static assets in `public/` are served at root path
   - Imported assets in `src/assets/` are processed by Vite

## Key Integration Points

1. **Build Configuration**
   - Vite config in `vite.config.js`
   - ESLint config in `eslint.config.js` (using new flat config format)

2. **External Dependencies**
   - React and React DOM v19.1
   - Vite plugins for React support
   - ESLint plugins for React Hooks and Refresh

Note: The React Compiler is intentionally not enabled due to performance considerations during development and build.

## Debugging Tips

1. Check the Vite dev server logs for build errors
2. Use React Developer Tools for component debugging
3. ESLint will catch common React-specific issues
4. HMR issues can usually be resolved by full page refresh