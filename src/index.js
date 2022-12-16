import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About  from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home"
import "./App.css"

const Applayout =() =>{
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <Applayout/>,
        children :[ {
            path: "/",
            element: 
             <Home />
            ,
          },
          {
            path: "about",
            element: <About/>,
          },
          {
            path: "contact",
            element: <Contact/>,
          }]
    }



 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);