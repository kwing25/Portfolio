import React, { useState } from "react";

import "./App.css";

import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";

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

// export default function App() {
//   return (
//     <main>
//       <Nav />
//       <Home />
//       {/* <About />
//       <Projects />
//       <Skills /> */}
//       {/* <Testimonials /> */}
//       <Contact />
//     </main>
//   );
// }


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
