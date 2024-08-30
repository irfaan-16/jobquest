import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import Feed from "./components/Feed.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
