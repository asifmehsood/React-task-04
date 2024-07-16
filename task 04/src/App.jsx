import React, { useEffect, useState } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><News  category="general"/></> 
    },
    {
      path: "/business",
      element:<><Navbar/><News category="business" /></> 
    },
    {
      path: "/entertainment",
      element:<><Navbar/><News  category="entertainment"/></> 
    },
    {
      path: "/health",
      element:<><Navbar/><News  category="health"/></> 
    },
    {
      path: "/science",
      element:<><Navbar/><News  category="science"/></> 
    },
    {
      path: "/sports",
      element:<><Navbar/><News  category="sports"/></> 
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
