# 🎮 PLAYGRID – A Digital Game Store

**PlayGrid** is a full-featured digital game store inspired by Epic Games Store, where users can browse and purchase games — showcasing my ability to build scalable, modern, and user-friendly web applications with React JS.

---

## 🌍 Live Demo

🔗 **Live Website:** [PLAYGRID](https://playgrid-aaa.surge.sh/)  
🔗 **Server Repository:** [PlayGrid-Server](https://github.com/al-abir-anik/PlayGrid-Server)


<img src="https://i.ibb.co.com/mC0sHqGz/Screenshot-96.png" alt="Homepage Screenshot" className="w-full bg-no-repeat" />

---

## 📖 Project Description

PLAYGRID is a **digital game store platform** inspired by Epic Games Store. It allows users to **explore games, purchase them securely, manage their personal game library, and add favourites/wishlist** for a personalized experience.

### 🔧 Why These Technologies

- **React (with Vite):** For fast development, component reusability, and a modern SPA experience.
- **Tailwind CSS + prebuiltUi:** To build a fully responsive and attractive UI quickly.
- **React Router:** For smooth client-side navigation.
- **Stripe Integration:** To handle secure and real-world payment flows.
- **React Context API & Hooks:** For state management and clean, scalable architecture.
- **Firebase Authentication:** To enable secure and easy user sign-up, login, and identity management.

### 📦 NPM Packages Used

- `react-router-dom` → Client-side routing
- `@stripe/react-stripe-js` & `@stripe/stripe-js` → Payment gateway integration
- `axios` → Handling API requests
- `react-hot-toast` → Notifications & alerts


### ⚡ Challenges Faced

- Integrating the **Stripe payment gateway** smoothly in a React application.
- Managing **state across multiple components** like Library, Cart, and Wishlist.
- Implementing **complex server-side filtering** to ensure efficient data handling and performance.


## ✅ Current Features

- Browse and explore a wide range of games
- Purchase games securely with **Stripe integration**
- Manage owned games in a personal **Game Library**
- Add/remove games from **Favourites** and **Wishlist**
- Interactive **toast notifications** and **modals**
- Fully **responsive design** for mobile, tablet, and desktop
- Clean and scalable **component-based architecture**
- Dashboard to view and manage user activities
- **Game Reviews & Ratings** from users


## 🚀 Future Features
- **Multiplayer Community Features** (friends, chat, achievements)
- **Dark Mode** toggle for accessibility
- **Admin Panel** for game management and analytics

<!-- ## 🚀 Features

- ✅ **Authentication & User Management** – Secure login/logout flow
- ✅ **Game Library** – Browse, search, and filter games dynamically
- ✅ **Favourites & Wishlist** – Add/remove games to personalize experience
- ✅ **Purchase Flow** – Integrated **Stripe payment gateway**
- ✅ **Responsive Design** – Works across mobile, tablet, and desktop
- ✅ **Dashboard** – Manage purchases, favourites, and library
- ✅ **Reusable Components** – Built with React functional components & hooks
- ✅ **Toast Notifications & Modals** – For interactive feedback
- ✅ **Clean Code** – Organized file structure for scalability -->

<!-- ---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), React Router, Context API
- **Styling:** Tailwind CSS, DaisyUI, Custom CSS
- **Payment:** Stripe Integration
- **State Management:** React Hooks & Context
- **Deployment:** Vercel / Surge / GitHub Pages
- **Utilities:** Axios, React Toastify, Recharts

--- -->

## 📂 Project Structure

```
PLAYGRID/
│── public/ # Static assets (images, icons, etc.)
│── src/
│ ├── components/ # Reusable components (cards, modals, buttons)
│ ├── pages/ # Page components (Home, Dashboard, Library, etc.)
│ ├── hooks/ # Custom React hooks
│ ├── context/ # Context API setup for global state
│ ├── utils/ # Helper functions
│ ├── App.jsx # Main application entry
│ └── main.jsx # Vite entry file
│
│── package.json # Project dependencies
│── tailwind.config.js # TailwindCSS configuration
│── README.md # Project documentation
```