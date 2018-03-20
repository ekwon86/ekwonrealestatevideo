<template>
    <div id="about">
        <div id="about-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="page-banners">ABOUT US</h1>
            </div>
        </div>
        <div class="container" id="about-info">
            <div class="row about-us-containers">
                <div class="col about-us-text-container">
                    <div class="about-us-text-subcontainer absolute-right">
                        <p class="about-headings">What We Do</p>
                        <p class="about-text">Our specialty is real estate videography that show off spaces and experiences. Our videos are an indispensable marketing tool to help real estate agents sell more homes and business owners attract more customers.  We focus on producing stunning visual content that captures attention & engages consumers.</p>
                    </div>
                </div>
                <div class="col about-us-img-container">
                    <img src="../assets/editing.jpg" alt="edit">

                </div>
            </div>
            <div class="row about-us-containers">
                <div class="col about-us-img-container">
                    <img src="../assets/drone.jpeg" alt="drone">
                </div>
                <div class="col about-us-text-container">
                    <div class="about-us-text-subcontainer absolute-left">
                        <p class="about-headings">Affordability Without Sacrificing Quality</p>
                        <p class="about-text">Our productions are guaranteed to grab the attention of your clients and drive results without you needing to spend a fortune for them. Our various services can be packaged in a variety of ways, custom-tailored for you and your needs. </p>
                    </div>
                </div>
            </div>
            <div class="row about-us-containers">
                <div class="col about-us-text-container">
                    <div class="about-us-text-subcontainer absolute-right">
                        <p class="about-headings">Your Success Is Our Success</p>
                        <p class="about-text">Your satisfaction is of utmost importance to us. From the beginning to end, we want your experience with us to be a smooth, easy process with a quick turnaround time that results in an incredible finished product.</p>
                    </div>
                </div>
                <div class="col about-us-img-container">
                    <img src="../assets/sold.jpg" alt="sold">
                </div>
            </div>
        </div>
        <div id="rdy-to-talk">
            <div id="rdy-to-talk-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center what-i-do-container">
                        <h1 class="rdy-to-talk-banner">Ready to </h1>
                    </div>
                    <div class="col-12 text-center">
                        <router-link to="/contact">
                            <div class=" learn-more-button" style="">
                                <span>Let's talk</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script></script>

<style scoped>
    #about-background {
        background: url("../assets/pic3.jpg");
    }
    .about-us-containers {
        height: 350px;
        margin-top: 50px;
        /*border: 1px solid black;*/
    }
    .about-headings {
        font-weight: bold;
        font-size: 2rem;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0,0,0,0.5);
        font-family: 'Oswald', sans-serif;
    }
    .about-text {
        text-align: justify;
        line-height: 1.75em;
    }
    .about-us-text-container, .about-us-img-container {
        height: 100%;
    }
    .about-us-text-subcontainer {
        padding: 25px 40px;
        position: absolute;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        top: 50%;
        background-color: rgba(255,255,255,1);
        z-index: 9999;
        transform: translateY(-50%);
    }

    .absolute-right {
        right: -75px;
    }
    .absolute-left {
        left: -75px;
    }

    .about-us-img-container img {
        height: 100%;
        width: 100%;
    }
    #about-info {
        min-height:700px;
        height: auto;
        padding-top: 25px;
        padding-right: 0;
        padding-left: 0;
    }

    .rdy-to-talk-banner {
        text-transform: uppercase;
        font-family: 'Oswald',sans-serif;
        font-weight: bold;
        color: white;
        margin-bottom: 25px;
        font-size: 3rem;
    }

    .learn-more-button {
        border: 3px solid white;
        display: inline-block;
        margin-top: 25px;
        color: white;
        background-color: transparent;
        width: 250px;
        padding: 15px 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: 0.2s;
    }

    .learn-more-button:hover {
        background-color: white;
        color: black;
    }

    #rdy-to-talk {
        position: relative;
        margin-top: 100px;
        height: auto;
        background: url("../assets/pic3.jpg");
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 100px 0;
    }

    #rdy-to-talk-overlay {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.6);
        top: 0;
    }
</style>