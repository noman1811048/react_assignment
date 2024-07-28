# Hotel Frontend Application

This is a frontend application built using React that displays hotel details. It uses a configuration JSON file for static values, such as the API base URL, and reuses components where appropriate. The application includes a shimmer loader while loading data and maintains high code quality. The application is served through the `/hotel` route.

## Features

- Display hotel details using React components.
- Reuse components for better code maintainability.
- Show a shimmer loader while data is loading.
- Use a configuration JSON file for static values.
- Serve the page through the `/hotel` route.
- Show a 404 page for unknown slugs (optional).

## Folder Structure
```
src/
├── assets/
│   ├── images/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   ├── image4.jpg
│   │   └── image5.jpg
├── components/
│   ├── Gallery/
│   │   ├── Gallery.jsx
│   │   └── Gallery.css
│   ├── NotFoundPage/
│   │   ├── NotFoundPage.jsx
│   │   └── NotFoundPage.css
├── hooks/
│   └── useFetch.js
├── pages/
│   ├── Home/
│   │   └── Home.jsx
│   ├── Hotel/
│   │   └── Hotel.jsx
├── App.js
├── index.js
└── config/
    └── config.json

```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/noman1811048/react_assignment
cd react_assignment
```
## Install dependencies:
#### npm install
#### Open your browser and navigate to http://localhost:3000/hotel/hotel-slug.
### Deployment
#### npm run build
