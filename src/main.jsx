import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/router.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";   

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />  
    </StrictMode>
  </HelmetProvider>
);