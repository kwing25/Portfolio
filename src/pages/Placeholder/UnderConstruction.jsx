import React from "react";
import "../Placeholder/UnderConstruction.scss";
import "../Placeholder/UnderConstruction";

export default function UnderConstruction() {
    return (
        <div class="placeholder" id="placeholderpage">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col">
                        <h1 class="title">Kendra Wing
                        <br></br>Web Developer</h1>
                    </div>
                    <div class="col">
                        <h3 class="title-sentence">Website Under Construction</h3>

                    </div>
                </div>
                <div class="row justify-content-center" id="contact">
                    <h3>Let's Keep In Touch ☞</h3>
                    {/* <ul class="social-icons">
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fab fa-codepen"></i></a></li>
                        </ul> */}
                    <ul class="contact-info_items">
                        <li class="email">
                            <a href="../1MainFiles/index.html">
                                <i class="fas fa-envelope"></i> Email: kendrawingpro@icloud.com </a>
                        </li>
                        <li class="linkedinaccount">
                            <a href="https://www.linkedin.com/in/kendrawing/">
                                <i class="fab fa-linkedin-in"></i> LinkedIn Account:
                www.linkedin.com/in/kendrawing </a>
                        </li>
                        <li class="githubaccount">
                            <a href="https://github.com/kwing25">
                                <i class="fab fa-github"></i>
                 GitHub Account: github.com/kwing25 </a>
                        </li>
                    </ul>

                </div>

                <h6>Content coming soon...</h6>


            </div>

            <footer>
                <a href="www.gitub.com/kwing25">Kendra Wing © 2021</a>
            </footer>
        </div>
    );
}