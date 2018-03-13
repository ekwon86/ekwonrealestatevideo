<template>
    <div id="about">
        <div id="about-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="page-banners">ABOUT US</h1>
            </div>
        </div>
        <div class="container" id="about-info">
            <div class="row about-containers">
                <div class="col">
                    <h1 class="about-headers">What we do</h1>
                    <p class="about-text">Our specialty is real estate videography and photography that show off spaces and experiences. Our videos are an indispensable marketing tool to help real estate agents sell more homes and business owners attract more customers.  We focus on producing stunning visual content that captures attention & engages consumers.</p>
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
    .about-containers {
        margin: 25px 0;
    }
    .about-text {
        text-align: justify
    }
    .about-headers {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        border-bottom: 1px solid rgba(0,0,0,0.33);
        padding-bottom: 10px;
        font-weight: bold;
        letter-spacing: 3px;
    }
    #about-info {
        min-height:700px;
        height: auto;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 0;
        padding-left: 0;
    }
</style>