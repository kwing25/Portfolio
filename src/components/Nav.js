import React from "react";


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <div class="nav">
      
      <div class="nav header" id="navheader">
        <a href="index.html">
          <span id="nav-header-text">
            <h1 id="title-name">Kendra Wing</h1>
            <h3>Web Developer</h3>
          </span>
        </a>
      </div>

      <ul className="nav nav-tabs" id="navmain">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home{" "}
          </a>{" "}
        </li>{" "}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About{" "}
          </a>{" "}
        </li>{" "}
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `Project`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio{" "}
          </a>{" "}
        </li>{" "}
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact{" "}
          </a>{" "}
        </li>{" "}
      </ul>
    </div>
  );
}

export default Nav;


// import React from "react"

// export default function Nav() {
//   return (
//     <header className="bg-gray-800 md:sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
//           <a href="#about" className="ml-3 text-xl">
//             Reed Barger
//           </a>
//         </a> */}
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
//           <a href="#home" className="mr-5 hover:text-white">
            
//           </a>
//           {/* <a href="#skills" className="mr-5 hover:text-white">
//             Skills
//           </a>
//           <a href="#testimonials" className="mr-5 hover:text-white">
//             Testimonials
//           </a> */}
//         </nav>
//         {/* <a
//           href="#contact"
//           className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
//           Hire Me
     
//         </a> */}
//       </div>
//     </header>
//   );
// }