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
react_assignment
├── src
│   ├── assets
│   │   ├── images
│   │       ├── image1.jpg
│   │       ├── image2.jpg
│   │       ├── image3.jpg
│   │       ├── image4.jpg
│   │       └── image5.jpg
        ├── css
│   │       ├── style.css
│   │      
│   ├── components
│   │   ├── Footer
│   │   │   └── Footer.jsx
│   │   ├── Gallery
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.css
│   │   ├── Header
│   │   │   └── Header.jsx
│   │   ├── HostProfile
│   │   │   └── HostProfile.jsx
│   │   ├── HotelRooms
│   │   │   └── HotelRooms.jsx
│   │   ├── Map
│   │   │   └── Map.jsx
│   │   ├── NotFoundPage
│   │   │   ├── NotFoundPage.jsx
│   │   │   └── NotFoundPage.css
│   │   ├── ShimmerLoader
│   │   │   └── ShimmerLoader.jsx
│   ├── hooks
│   │   └── useFetch.js
│   ├── pages
│   │   ├── Home
│   │   │   └── Home.jsx
│   │   ├── Hotel
│   │   │   └── Hotel.jsx
│   ├── App.js
│   ├── index.js
│   ├── config
│   │   └── config.json
│   ├── context
│   │   └── ContextHotel.jsx
├── .gitignore             
├── package.json    
└── README.md      


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
#### Open your browser and navigate to http://localhost:5173/hotel/hotel-slug.
### Deployment
#### npm run build

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

### Fork the repository
##### Create your feature branch (git checkout -b feature/AmazingFeature)
##### Commit your changes (git commit -m 'Add some AmazingFeature')
##### Push to the branch (git push origin feature/AmazingFeature)
##### Open a Pull Request
## License
##### This project is licensed under the MIT License - see the LICENSE file for details.

##### By following these steps, you should have a beautifully styled README that is clear, comprehensive, and easy to follow.
