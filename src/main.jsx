import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import Routes from "./routes/Routes";
import AuthProvider from "./auth/AuthProvider";
import { AppContextProvider } from "./contexts/AppContext";
import { Toaster } from "react-hot-toast";
import "./style/index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppContextProvider>
        <>
          <RouterProvider router={Routes}></RouterProvider>{" "}
          <Toaster position="top-center" reverseOrder={true} />
        </>
      </AppContextProvider>
    </AuthProvider>
  </StrictMode>
);
