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
                        <p class="about-headings">What we do</p>
                        <p class="about-text">Our specialty is real estate videography that show off spaces and experiences. Our videos are an indispensable marketing tool to help real estate agents sell more homes and business owners attract more customers.  We focus on producing stunning visual content that captures attention & engages consumers.</p>
                    </div>
                </div>
                <div class="col about-us-img-container">
                    <img src="../assets/sold.jpg" alt="sold">
                </div>
            </div>
            <div class="row about-us-containers">
                <div class="col about-us-img-container">
                    <img src="../assets/drone.jpeg" alt="drone">
                </div>
                <div class="col about-us-text-container">
                    <div class="about-us-text-subcontainer absolute-left">
                        <p class="about-headings">Affordability without sacrificing quality</p>
                        <p class="about-text">Everyone should be proud of the work they do. That’s why at One Shot Productions, quality is never sacrificed. With hand-picked royalty free tracks, creative videography, and Hollywood-grade equipment and training, our FAA 107 licensed, insured, and certified teams are guaranteed to provide your listing with the best marketing materials you’ve ever used, and you don’t have to spend a fortune to get your hands on them.</p>
                    </div>
                </div>
            </div>
            <div class="row about-us-containers">
                <div class="col about-us-text-container">
                    <div class="about-us-text-subcontainer absolute-right">
                        <p class="about-headings">Complete customer satisfaction</p>
                        <p class="about-text">Your success is our success and your satisfaction is our utmost is of utmost importance to us.</p>
                    </div>
                </div>
                <div class="col about-us-img-container">
                    <img src="../assets/editing.jpg" alt="edit">
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
        padding: 25px;
        position: absolute;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        top: 50%;
        background-color: rgba(255,255,255,0.9);
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
        padding-right: 0;
        padding-left: 0;
    }
</style>