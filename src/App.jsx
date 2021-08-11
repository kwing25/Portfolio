import React from "react";

import "./App.css";

import Nav from "./components/Nav.jsx";

import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";

export default function App() {
  return (
    <main>
      <Home/>
      <Nav />
      {/* <About />
      <Projects />
      <Skills /> */}
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}


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
