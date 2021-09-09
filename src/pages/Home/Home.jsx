import React from "react"
import "../Home/home.scss"

export default function Home() {
    return (
        <div class="home" id="homepage">

            <div class="container" id="container-home">

                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <h1 class="title-sentence">Hello My Name is Kendra.</h1>
                    </div>
                </div>

                <div class="row justify-content-center" id="main">
                    <div class="col-md-6">
                        <h3>I love to build websites. </h3>
                    </div>
                    <div class="col-md-6">
                        <h4>Websites that are... Colorful, Unique, Imaginative, Impactful</h4>
                    </div>
                </div>

                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <div class="pic-graphic">
                            <div class="pic-graphic__img"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}