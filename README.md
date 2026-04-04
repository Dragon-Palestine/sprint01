# Employee Management System

A professional, scalable **React + Vite** application demonstrating best practices for feature-based architecture and code organization.

---

## Features

- 🔍 **Advanced Search** – Search employees by name or email with debouncing
- 🎯 **Smart Filtering** – Filter by department and employment status
- 📊 **Large Dataset Handling** – Efficiently manages 1000+ employees with optimized rendering
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile devices with Bootstrap
- 🌙 **Dark Mode** – Toggle between light and dark themes with localStorage persistence
- ➕ **CRUD Operations** – Add, edit, and delete employees with form validation
- ♿ **Accessibility** – Built with ARIA labels and semantic HTML
- 🧭 **Navigation** – React Router for multi-page navigation

---

## Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed information about the codebase organization.

### Quick Overview

```
sprint01/
├── README.md                         # Project README
├── PROJECT_STRUCTURE.md              # Project structure documentation
├── react/
│   ├── public/                       # Static assets
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── features/employees/       # Employee management feature
│   │   │   ├── components/           # SearchBar, FilterPanel, EmployeeCard, etc.
│   │   │   ├── constants/            # Feature constants
│   │   │   ├── data/                 # Employee data generation
│   │   │   ├── services/             # CRUD operations
│   │   │   └── styles/               # Feature styles
│   │   ├── styles/                   # Global styles
│   │   ├── App.jsx                   # Root component with routing
│   │   ├── main.jsx                  # Entry point with ErrorBoundary
│   │   ├── ErrorBoundary.jsx         # Error handling
│   │   ├── assets/                   # Project assets
│   │   └── main.jsx                  # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── eslint.config.js
│   └── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## Available Scripts

- `npm run dev` – Start development server with hot module replacement
- `npm run build` – Build optimized production bundle
- `npm run preview` – Preview production build locally
- `npm run lint` – Check code quality with ESLint

---

## Dependencies

### Core Dependencies

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework for responsive design
- **Vite** - Build tool and dev server

### Development Dependencies

- **ESLint** - Code linting
- **Vite Plugin React** - React support for Vite

---

## Architecture Highlights

### Feature-Based Organization

- Groups all related files (components, hooks, utilities, styles) for each feature together
- Improves maintainability, scalability, and team collaboration
- Simplifies adding or removing features
- Promotes component reusability

### Module Exports

```javascript
// Instead of:
import SearchBar from "./features/employees/components/SearchBar";
import FilterPanel from "./features/employees/components/FilterPanel";

// You can write:
import { SearchBar, FilterPanel } from "./features/employees/components";
```

### Performance Optimization

- Uses `useMemo` hook for filtering large datasets
- Components properly split for React optimizations
- CSS organized to minimize bundle size

---

## Styling

### Bootstrap 5 Framework

- Responsive grid system for mobile-first design
- Pre-built components (cards, forms, buttons, pagination)
- Dark mode support via `data-bs-theme` attribute
- Utility classes for rapid UI development

### Global Styles (`src/styles/globals.css`)

- CSS variables for consistent theming
- CSS resets and base styles
- Dark mode support with CSS variables

### Feature Styles (`src/features/[feature]/styles/`)

- Component-specific styles
- Co-located with components for easy maintenance
- BEM-like naming conventions

---

## Dark Mode

The application includes a built-in dark mode feature:

- **Toggle Button**: Located in the header, switches between light and dark themes
- **Persistence**: Theme preference is saved in localStorage
- **Bootstrap Integration**: Uses Bootstrap's `data-bs-theme` attribute for automatic styling
- **CSS Variables**: Custom variables in `globals.css` for additional theming

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Error Handling

The application includes comprehensive error handling:

- **Error Boundaries**: Catches JavaScript errors in the component tree
- **Form Validation**: Client-side validation for employee forms
- **User Feedback**: Clear error messages and loading states
- **Graceful Degradation**: App continues to function even with errors

---

## Contributing

1. Follow the established file structure
2. Keep components small and focused
3. Use Bootstrap classes for consistent styling
4. Implement dark mode support for new components
5. Co-locate styles with components
6. Use JSDoc comments for documentation
7. Maintain the naming conventions
8. Test new features before committing

---

## Development Best Practices

- **Component Naming** – PascalCase for components
- **File Organization** – Keep related files together in feature folders
- **Exports** – Use `index.js` files for clean exports
- **Documentation** – Add JSDoc comments to components and utilities
- **Scalability** – Add new features in `src/features/[feature-name]`

---

## Performance Notes

### Handling 1000+ Employees

- Memoized filtering with `useMemo`
- Grid-based CSS layout
- Optimized component rendering

### Memory Optimization

- Employee data generated once at app startup
- Filtering memoized to prevent unnecessary re-renders
- No external API calls (data generated locally)

---

## Tech Stack

- **Framework**: React 19.2.4
- **Routing**: React Router DOM 7.14.0
- **UI Framework**: Bootstrap 5.3.8
- **Build Tool**: Vite 8.0.1
- **Package Manager**: npm
- **Code Quality**: ESLint 9.39.4
- **Development**: Node.js

---

## License

This project is part of the **Sprint 1 learning initiative**.

---

## Support

For issues or questions, refer to [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).
