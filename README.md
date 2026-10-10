# 🖼️ Image Explorer

A modern and interactive image discovery application built with **React and Vite**. Explore images from multiple APIs, search for photos, discover anime images, and view images on a dedicated details page.

🌐 **Live Demo:** https://image-explorer-nine.vercel.app/

---

## ✨ Features

- 🖼️ **Multiple Image Sources** — Browse images from different APIs.
- 🔍 **Image Search** — Search for images using keywords.
- 🎌 **Anime Images** — Explore anime-style images.
- 📄 **Pagination** — Navigate between pages of images.
- 👀 **Image Details Page** — Open individual images on a dedicated page.
- 🔄 **State Restoration** — Restore gallery data and scroll position when navigating back.
- ⏳ **Loading Indicators** — Display loading states while fetching images.
- ⚠️ **Error Handling** — Handle API request failures.
- 📱 **Responsive UI** — Clean and interactive user interface.
- 🎨 **Modern Styling** — Styled using Tailwind CSS.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and build tool |
| JavaScript | Application logic and interactivity |
| Tailwind CSS | Styling and responsive layouts |
| Axios | Making HTTP requests to APIs |
| React Router | Navigation between pages |
| Session Storage | Preserving gallery state during navigation |
| REST APIs | Fetching images from external services |

## 🌐 APIs Used

### 1. Picsum Photos
Used to fetch random images and practice pagination.

### 2. Nekos.best
Used to explore anime-style images.

### 3. Pixabay API
Used to search for images using keywords.

## 🚀 Live Demo

Try the application here:

👉 **https://image-explorer-nine.vercel.app/**

## 💻 Getting Started

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

Create a `.env` file in the project's root directory and add your Pixabay API key:

```env
VITE_PIXABAY_API_KEY=your_pixabay_api_key
```

Replace `your_pixabay_api_key` with your actual API key.

**Important:** Never commit API keys, passwords, or other secrets to GitHub. Ensure your `.env` file is included in `.gitignore`.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to use the application.

### 6. Build for Production

```bash
npm run build
```

To preview the production build locally, run:

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
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

*Note: The exact files and folders may vary depending on your project setup.*

## 🧠 Concepts Practiced

While building this project, I practised:

- React functional components and hooks
- Managing state with `useState`
- Handling side effects with `useEffect`
- Fetching API data using Axios
- Working with asynchronous JavaScript
- Conditional rendering
- Search functionality and pagination
- Client-side routing with React Router
- Preserving state with Session Storage
- Loading and error states
- Responsive UI development with Tailwind CSS
- Deploying a frontend application using Vercel

## 🔮 Future Improvements

- Add more image APIs.
- Improve mobile responsiveness.
- Add advanced search filters.
- Improve accessibility.
- Add image download functionality.
- Enhance the image details page.
- Improve error messages and retry functionality.

## 👨‍💻 Author

**Sahil Gupta**

- GitHub: https://github.com/Astakun01
- Live Project: https://image-explorer-nine.vercel.app/

---

⭐ If you find this project interesting, feel free to explore the repository!

**Built with React, Vite, and a passion for learning web development.**
