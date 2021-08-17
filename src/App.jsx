import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";
// import socialNav from "./components/socialNav/socialNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {" "}
      {/* We are passing the currentPage from state and the function to update it */}{" "}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />{" "}

      {/* Here we are calling the renderPage method which will return a component  */}{" "}
      {renderPage()}{" "}

    </div>

  );
}


