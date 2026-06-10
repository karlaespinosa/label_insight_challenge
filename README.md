# Label Insight Challenge

A React application that displays a photo gallery, allows users to view photo details in a modal, and add custom descriptions that persist using local storage.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- Vitest
- React Testing Library

## Requirements

- Node.js >= 22
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:5173
```

## Available Scripts

Start the development server:

```bash
npm start
```

Build the application:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Run tests:

```bash
npm run test
```

## Features

- Fetches photo data from the provided API
- Displays the first 25 photos in a responsive gallery
- Opens a modal with photo details
- Allows users to add and edit custom descriptions
- Persists descriptions using local storage
- Includes loading and error states
- Responsive design for desktop and mobile devices
- Unit tests for key functionality

## Project Structure

```text
src/
├── components/
├── helpers/
├── hooks/
├── services/
├── test/
├── types/
└── App.tsx
```

## Notes

- Photo descriptions are stored locally in the browser using local storage and will remain available after page refreshes.
- Custom descriptions are stored by photo ID, allowing each photo to maintain its own persisted description.

## Author

Karla Espinosa
