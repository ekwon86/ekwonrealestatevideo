<template>
    <div id="home">
        <div id="landing-background">
            <div class="overlay"></div>
            <div class="container home-banner-container">
                <h1 class="the-future">The <span class="future">Future</span></h1>
                <h1 class="of-real-estate-marketing">of Real Estate Marketing</h1>
            </div>
        </div>
        <div class="container" id="landing-info">
            <!-- INTRO STATEMENT -->
            <div class="row">
                <div class="col-6 text-right">
                    <h1 class="let-me-help">Let me help showcase your listing with beautiful, professional videos & photos</h1>
                </div>
                <div class="col-6 intro-text-container">
                    <p>Set yourself apart from the competition with a <strong>professional real estate marketing video</strong> to boldly showcase your property, highlight building features and surrounding local amenities.</p>
                    <p>Our custom real estate videos provide your target audience with a rich and engaging experience that is sure to leave an impression. The final production consists of full motion video that is outputted both on DVD and as a web-ready video that can be embedded on any website, sent via email, or shared on social media. </p>
                    <p>At inMotion, we produce fully custom HD (high definition) videos using commercial drones, helicopters and professional lighting and sound equipment for a wide range of real estate marketing projects.</p>
                </div>
            </div>
            <!-- TYPES OF SERVICES -->
            <div class="row" id="services-section">
                <div class="col-4 text-center services-containers">
                    <div class="box-shadow">
                        <div class="services-subcontainers video-container">
                            <img src="../assets/video.png" class="services-icons" alt="video">
                            <h2 class="services-headings">Video</h2>
                        </div>
                        <div class="services-desc-subcontainers">
                            <span>I offer the latest in 4K and HD video production using top of the line cameras and equipment to produce visually stunning marketing and promotional videos. </span>
                        </div>
                    </div>
                </div>
                <div class="col-4 text-center  services-containers">
                    <div class="box-shadow">
                        <div class="services-subcontainers drone-container">
                            <img src="../assets/drone.png" class="services-icons"  alt="drone">
                            <h2 class="services-headings">Drone</h2>
                        </div>
                        <div class="services-desc-subcontainers">
                            <span>I provide custom aerial footage and photos using the latest commercial drones where needed. Drone aerial imagery offers a unique perspective from the sky and can effectively showcase large properties and nearby amenities.</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 text-center  services-containers">
                    <div class="box-shadow">
                        <div class="services-subcontainers photo-container">
                            <img src="../assets/dslr.png" class="services-icons" alt="photo">
                            <h2 class="services-headings">Photo</h2>
                        </div>
                        <div class="services-desc-subcontainers">
                            <span>I </span>
                        </div>
                    </div>
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
.overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
}
.home-banner-container {
    position: relative;
    top: 50%;
    text-align: right;
    transform:translate(0,-50%);
}
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
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
}

.of-real-estate-marketing {
    font-size: 5rem;
    color: white;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
}
.future {
    color: #38d0ff;
}
#landing-background {
    height: 700px;
    width: 100%;
    position: relative;
    border: transparent;
    background: url("../assets/pic1.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    height: auto;
    margin: 100px 0 80px 0;
}

.services-containers {
}
.box-shadow {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.services-icons {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
}
.services-subcontainers {
    padding: 25px;
    background-color: #007bff;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
.services-desc-subcontainers {
    padding: 25px;
    text-align: center;
    min-height: 250px;
    height: auto;
}
</style>