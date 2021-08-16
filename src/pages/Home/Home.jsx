import React from "react"
import "../Home/home.scss"

export default function Home() {
    return (
        <div class="home" id="homepage">

            <div class="container">
                <div class="row justify-content-md-center" id="intro-row">
                    <h1 class="title-typing">Hello My Name is Kendra.</h1>
                </div>
            </div>

            <div class="container">
                <div class="row row-cols-2">
                    <div class="col-6">
                        <h3>I love to build websites. </h3>
                        <h4>Websites that are... Colorful, Unique, Imaginative, Impactful</h4>
                    </div>
                    <div class="col-6">
                        <div class="profile-card"><img src="https://raw.githubusercontent.com/kwing25/New-Portfolio/main/src/assets/portraitblackwhite.jpg?token=ASYPV6AP27BHRNX4TIQH2PDBELF2U" class="img img-responsive" alt="profile-pic"></img>
                            <div class="profile-name">Kendra Wing</div>
                            <div class="profile-username">@kwing25</div>
                            <div class="profile-icons">
                                <a href="www.linkedin.com/in/kendrawing"><i class="fab fa-linkedin"></i></a>
                                <a href="www.gitub.com/kwing25"><i class="fab fa-github-square"></i></a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

