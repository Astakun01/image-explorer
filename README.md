# 🖼️ Image Explorer

A modern and interactive image discovery application built with **React and Vite**. Explore images from multiple APIs, search for images, browse anime artwork, and view individual images on a dedicated details page.

The application features a clean user interface, pagination, loading indicators, error handling, and gallery state restoration when navigating back from an image details page.

## ✨ Features

- 🖼️ **Multiple Image Sources** — Browse images from different APIs.
- 🔍 **Image Search** — Search for images using Pixabay.
- 🎌 **Anime Gallery** — Explore anime-style images from Nekos.best.
- 🌄 **Random Images** — Discover images using Picsum Photos.
- 📄 **Pagination** — Navigate through multiple pages of images.
- 👀 **Image Details Page** — Open an individual image on a dedicated page.
- 🔄 **Gallery State Restoration** — Restore the previous gallery state when navigating back.
- ⏳ **Loading Indicators** — Display loading feedback while fetching images.
- ⚠️ **Error Handling** — Handle API request failures gracefully.
- 📱 **Responsive UI** — A clean interface designed for different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application logic and interactivity |
| Tailwind CSS | Styling and responsive layouts |
| Axios | Making HTTP requests to APIs |
| React Router | Client-side navigation |
| REST APIs | Fetching image data |
| sessionStorage | Restoring gallery state during navigation |

## 🌐 APIs Used

### 1. Picsum Photos
Used to retrieve random images for browsing.

### 2. Nekos.best
Used to fetch anime-style images.

### 3. Pixabay API
Used to search for images based on user queries.

**Note:** API availability and request limits depend on the respective API providers.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Astakun01/image-explorer.git
```

### 2. Navigate to the Project Directory

```bash
cd image-explorer
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project's root directory.

Add your Pixabay API key:

```env
VITE_PIXABAY_API_KEY=your_pixabay_api_key
```

Replace `your_pixabay_api_key` with your actual Pixabay API key.

**Important:** Never commit your `.env` file or expose API keys in public repositories.

Ensure `.env` is included in your `.gitignore` file.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

### 6. Build for Production

To create a production build, run:

```bash
npm run build
```

To test the production build locally, run:

```bash
npm run preview
```

## 📁 Project Structure

```text
image-explorer/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── ImagePage.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

*Note: The structure above represents the main project files. Your actual directory structure may differ slightly.*

## 🧠 Key Concepts Practiced

Through this project, I practiced:

- React functional components and hooks
- Managing state with `useState`
- Handling side effects with `useEffect`
- Fetching data from APIs using Axios
- Working with asynchronous JavaScript
- Implementing search and pagination
- Client-side routing with React Router
- Passing and managing data between pages
- Preserving application state with `sessionStorage`
- Implementing loading states and error handling
- Building responsive interfaces with Tailwind CSS
- Managing environment variables
- Preparing a React application for deployment

## 🌍 Live Demo

**Live Application:** [Image Explorer](https://image-explorer-9rfo5tot.vercel.app/)

**GitHub Repository:** [View Source Code](https://github.com/Astakun01/image-explorer)

## 🎯 Project Purpose

I built this project as part of my web development learning journey to strengthen my practical knowledge of React, API integration, state management, routing, and responsive UI development.

The project helped me understand how different APIs can be integrated into a single application and how to manage application state while navigating between pages.

## 🔮 Future Improvements

- Add more image sources.
- Improve mobile responsiveness.
- Introduce advanced search filters.
- Add image bookmarking and favorites.
- Improve accessibility and keyboard navigation.
- Optimize image loading and performance.
- Add additional gallery customization options.

## 👨‍💻 Author

**Sahil Gupta**

- GitHub: [@Astakun01](https://github.com/Astakun01)

---

⭐ If you find this project interesting, feel free to explore the repository!
