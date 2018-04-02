<template>
    <div class="row">
        <div class="col-12 text-center what-i-do-container">
            <h1 class="what-i-do">What We Do</h1>
            <p>We help real estate agents sell properties with less hassle, in less time, and for higher prices by offering the following services:</p>
        </div>
        <div class="col-4 text-center services-containers">
            <div>
                <div class="services-subcontainers video-container">
                    <img src="../../assets/video.png" class="services-icons" alt="video">
                </div>
                <div class="services-desc-subcontainers">
                    <h2 class="services-headings">Video Production</h2>
                    <span>We offer the latest in 4K and HD video production to produce visually stunning marketing and promotional videos that are guaranteed to stop potential buyers in their tracks.</span>
                </div>
            </div>
        </div>
        <div class="col-4 text-center  services-containers">
            <div>
                <div class="services-subcontainers drone-container">
                    <img src="../../assets/drone.png" class="services-icons"  alt="drone">
                </div>
                <div class="services-desc-subcontainers">
                    <h2 class="services-headings">Drone</h2>
                    <span>We provide custom aerial footage and photos using the latest commercial drones where needed. Drone aerial imagery offers a unique perspective from the sky and can effectively showcase large properties and nearby amenities.</span>
                </div>
            </div>
        </div>
        <div class="col-4 text-center  services-containers">
            <div class="services-subcontainers photo-container">
                <img src="../../assets/dslr.png" class="services-icons" alt="photo">
            </div>
            <div class="services-desc-subcontainers">
                <h2 class="services-headings">Photographic Stills</h2>
                <span>Captivate your prospective buyers with stunning, shareable, still photography. We will turn any property into a striking work of art and keep your prospects coming back for more. </span>
            </div>
        </div>
        <div class="col-12" id="interested-in-more-services">
            <router-link to="/services">
                <div class="custom-button" style="">
                    <span>Learn More</span>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script></script>

<style scoped>
    #services-section {
        height: auto;
        margin: 100px 0 80px 0;
    }

    .services-headings {
        /*text-transform: uppercase;*/
        font-size: 1.75rem;
        font-weight: bold;
        padding-bottom: 10px;
        letter-spacing: 1px;
        color: black;
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
        margin-top: 50px;
        height: auto;
    }
    #interested-in-more-services p {
        font-size: 1rem;
    }
    .what-i-do-container {
        margin-bottom: 25px;
    }
    .what-i-do {
        text-transform: uppercase;
        font-family: 'Oswald',sans-serif;
        font-weight: bold;
        margin-bottom: 25px;
        font-size: 4rem;
    }
</style>
