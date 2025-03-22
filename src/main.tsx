import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import Custom404 from "./pages/404";
import ProfilePage from "./pages/profile/";
import GalleryPage from "./pages/gallery";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Custom404 />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "portfolio", element: <PortfolioPage /> },
        { path: "gallery", element: <GalleryPage /> },
      ],
    },
  ],
  {
    basename: "/",
  }
);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
