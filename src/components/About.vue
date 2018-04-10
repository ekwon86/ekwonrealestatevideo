<template>
    <div id="about">
        <div id="about-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="page-banners">ABOUT US</h1>
            </div>
        </div>
        <div class="container about-container">
            <div class="row about-rows">
                <div class="col-lg-4 text-right about-heading-containers addtl-padding">
                    <p class="about-top-heading">01</p>
                    <p class="about-headings">What We do</p>
                </div>
                <div class="col-12 col-lg-8 addtl-padding">
                    <div class="about-us-text-containers">
                        <p class="about-text">At <strong>EK Real Estate Media</strong> we specialize in the production of high-end real estate video marketing. Our videos are an indispensable marketing tool to help real estate agents sell more homes and business owners attract more customers.</p>
                        <p class="about-text">We focus on producing stunning visual content that captures attention & engages consumers. We can help you reach a new generation of commercial tenants, vacationers, and homebuyers with a high-end real estate video.</p>
                    </div>
                </div>
            </div>
            <div class="row about-rows">
                <div class="col-lg-4 text-right about-heading-containers addtl-padding">
                    <p class="about-top-heading">02</p>
                    <p class="about-headings">Affordability Without Sacrificing Quality</p>
                </div>
                <div class="col-12 col-lg-8 addtl-padding">
                    <div class="about-us-text-containers">
                        <p class="about-text">Our productions are guaranteed to grab the attention of your clients and drive results without you needing to spend a fortune for them. From basic photography stills to aerial videos and stills using our drone, our offerings can be packaged in a variety of ways custom-tailored for you and your marketing needs.</p>
                    </div>
                </div>
            </div>
            <div class="row about-rows">
                <div class="col-lg-4 text-right about-heading-containers addtl-padding">
                    <p class="about-top-heading">03</p>
                    <p class="about-headings">Your Success Is Our Success</p>
                </div>
                <div class="col-12 col-lg-8 addtl-padding">
                    <div class="about-us-text-containers">
                        <p class="about-text">Your satisfaction is of utmost importance to us. At EK Productions, we want your experience with us to be a smooth, easy process with a quick turnaround time that will undoubtedly capture the attention of potential buyers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="rdy-to-talk">
            <div id="rdy-to-talk-overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center what-i-do-container">
                        <h1 class="rdy-to-talk-banner">Ready to set yourself apart from your competition?</h1>
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
    .about-heading-containers {
        border-right: 1px solid rgba(0,0,0,0.1);
    }
    .about-container {
        padding: 100px 0;
    }
    .addtl-padding {
        padding: 25px;
    }
    .about-headings {
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 30px;
        font-family: 'Oswald', sans-serif;
    }
    .about-text {
        text-align: justify;
        line-height: 1.75em;
        font-size: 1rem;
    }
    .about-top-heading {
        margin: 0;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 5px;
        font-size: 1rem;
        color: rgba(0,0,0,0.3);
    }
    .about-us-text-subcontainer {
        padding: 25px 40px;
        position: absolute;
        top: 50%;
        background-color: rgba(255,255,255,1);
        z-index: 9999;
        transform: translateY(-50%);
    }
    .about-us-img-containers {
        height: 100%;
        padding: 0;
    }

    .about-us-img-containers img {
        height: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        width: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
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
        border: 1px solid white;
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
        background-color: rgba(0,0,0,0.8);
        top: 0;
    }

    /***** MEDIA QUERIES *****/
    /*MOBILE - PORTRAIT*/
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px){
        .about-containers {
            height: auto;
            padding: 75px 0;
        }
        .about-us-img-containers {
            padding: 15px;
            height: 80%;
        }
        .about-top-heading {
            font-size: 2.5rem;
        }
        .about-us-text-containers {
            padding: 0;
        }
        .about-us-img-containers img {
            transform:translate(0,0);
        }
        .border-bottom {
            border-bottom: none !important;
        }
        .rdy-to-talk-banner {
            font-size: 1.75rem;
            margin-bottom: 10px;
        }
        .learn-more-button {
            font-weight: bold;
        }
    }

    /*MOBILE - LANDSCAPE*/
    @media only screen
    and (min-device-width: 481px)
    and (max-device-width: 825px) {
        .about-containers {
            height: auto;
            padding: 75px 0;
        }
        .about-us-img-containers {
            padding: 15px;
            height: 80%;
        }
        .about-top-heading {
            font-size: 2.5rem;
        }
        .about-us-text-containers {
            padding: 0;
        }
        .about-us-img-containers img {
            transform:translate(0,0);
        }
        .border-bottom {
            border-bottom: none !important;
        }
        .rdy-to-talk-banner {
            font-size: 1.75rem;
            margin-bottom: 10px;
        }
        .learn-more-button {
            font-weight: bold;
        }
        #about-background {
            height: 90vh;
        }

    }
</style>