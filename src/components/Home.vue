<template>
    <div id="home">
        <div id="landing-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="the-future">The <span class="future">Future</span></h1>
                <h1 class="of-real-estate-marketing">of Real Estate Marketing</h1>
            </div>
        </div>
        <div class="container" id="landing-info">
            <!-- INTRO STATEMENT -->
            <div class="row">
                <div class="col-6 text-right">
                    <h1 class="let-me-help">Let me help showcase your listing with beautiful, professional videos</h1>
                </div>
                <div class="col-6 intro-text-container">
                    <p>Did you know that 73% of sellers are likely to list an agent utilizing video? Only 1% of agents offer video utilizing video as a marketing tool. Let me help you seize the opportunity!</p>
                    <p>Set yourself apart from the competition with a <strong>professional real estate marketing video</strong> to boldly showcase your property, highlight building features and surrounding local amenities.</p>
                    <p>Our custom real estate videos provide your target audience with a rich and engaging experience that is sure to leave an impression. The final production consists of full motion video that is outputted as web-ready video that can be embedded on any website, sent via email, or shared on social media. </p>
                </div>
            </div>
            <!-- TYPES OF SERVICES -->
            <div class="row" id="services-section">
                <div class="col-12 text-center what-i-do-container">
                    <h1 class="what-i-do">What I Do</h1>
                    <p>I help real estate agents sell properties with less hassle, in less time, and for higher prices by offering the following services:</p>
                </div>
                <div class="col-3 text-center services-containers">
                    <div>
                        <div class="services-subcontainers video-container">
                            <img src="../assets/video.png" class="services-icons" alt="video">
                        </div>
                        <div class="services-desc-subcontainers">
                            <h2 class="services-headings">Video Production</h2>
                            <span>I offer the latest in 4K and HD video production to produce visually stunning marketing and promotional videos. </span>
                        </div>
                    </div>
                </div>
                <div class="col-3 text-center  services-containers">
                    <div>
                        <div class="services-subcontainers drone-container">
                            <img src="../assets/drone.png" class="services-icons"  alt="drone">
                        </div>
                        <div class="services-desc-subcontainers">
                            <h2 class="services-headings">Drone Video and Stills</h2>
                            <span>I provide custom aerial footage and photos using the latest commercial drones where needed. Drone aerial imagery offers a unique perspective from the sky and can effectively showcase large properties and nearby amenities.</span>
                        </div>
                    </div>
                </div>
                <div class="col-3 text-center  services-containers">
                    <div class="services-subcontainers photo-container">
                        <img src="../assets/dslr.png" class="services-icons" alt="photo">
                    </div>
                    <div class="services-desc-subcontainers">
                        <h2 class="services-headings">Photography Stills</h2>
                        <span>I don't only specialize in videography, but photography as well! Target more clients with attention-grabbing, professional photos of your property. </span>
                    </div>
                </div>
                <div class="col-3 text-center  services-containers">
                    <div>
                        <div class="services-subcontainers photo-container">
                            <img src="../assets/computer.png" class="services-icons" alt="photo">
                        </div>
                        <div class="services-desc-subcontainers">
                            <h2 class="services-headings">Custom Listing Website</h2>
                            <span>I don't only specialize in videography, but photography as well! Target more clients with attention-grabbing, professional photos of your property. </span>
                        </div>
                    </div>
                </div>
                <div class="col-12" id="interested-in-more-services">
                    <router-link to="/services">
                        <button type="button" class="btn btn-outline-primary btn-lg">Interested in Learn More?</button>
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

export default {
    components: {

    }
}
</script>

<style scoped>
    .the-future {
        font-size: 7rem;
        color: white;
        text-transform: uppercase;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        padding-bottom: 15px;
        font-family: 'Oswald', sans-serif;
    }

    .intro-text-container {
        text-align: justify;
    }

    .services-headings {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        padding-bottom: 10px;
        letter-spacing: 1px;
        color: black;
    }

    .of-real-estate-marketing {
        font-size: 5rem;
        color: white;
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
    }
    .future {
        color: #ff8c38;
    }
    #landing-background {
        background: url("../assets/pic1.jpg");
    }

    #landing-info {
        height: auto;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .let-me-help {
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 3rem;
    }

    #services-section {
        height: 620px;
        border: 1px solid black;
        margin: 100px 0 80px 0;
    }

    .services-icons {
        width: 80px;
        height: 80px;
        margin-bottom: 15px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .services-subcontainers {
        padding: 25px;
        height: 175px;
        width: 175px;
        display: inline-block;
        border-radius: 999em;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background-color: #007bff;
    }
    .services-desc-subcontainers {
        padding: 25px;
        text-align: center;
        min-height: 225px;
        height: auto;
    }
    #interested-in-more-services {
        text-align: center;
        margin-top: 25px;
    }
    #interested-in-more-services p {
        font-size: 1rem;
    }
    .what-i-do {
        text-transform: uppercase;
        font-family: 'Oswald',sans-serif;
        font-weight: bold;
        font-size: 4rem;
    }
</style>
