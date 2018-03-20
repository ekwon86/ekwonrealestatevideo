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
                    <p class="about-headings">What we do</p>
                    <p class="about-text">Our specialty is real estate videography that show off spaces and experiences. Our videos are an indispensable marketing tool to help real estate agents sell more homes and business owners attract more customers.  We focus on producing stunning visual content that captures attention & engages consumers.</p>
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
                    <p class="about-headings">Affordability without sacrificing quality</p>
                    <p class="about-text">Everyone should be proud of the work they do. That’s why at One Shot Productions, quality is never sacrificed. With hand-picked royalty free tracks, creative videography, and Hollywood-grade equipment and training, our FAA 107 licensed, insured, and certified teams are guaranteed to provide your listing with the best marketing materials you’ve ever used, and you don’t have to spend a fortune to get your hands on them.</p>
                </div>
            </div>
            <div class="row about-us-containers">
                <div class="col about-us-text-container">
                    <p class="about-headings">Complete customer satisfaction</p>
                    <p class="about-text">Your success is our success and your satisfaction is our utmost is of utmost importance to us.</p>
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
        margin-top: 100px;
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
    .about-us-text-container {
        
    }

    .about-us-img-container img {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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