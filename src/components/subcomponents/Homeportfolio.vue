<template>
    <div class="row">
        <div class="col-12 text-center what-i-do-container">
            <h1 class="what-i-do">OUR WORK</h1>
        </div>
        <div class="landing-portfolio-video-containers col-12 col-lg-6">
            <div class="landing-video-containers">
                <div class="landing-video">
                    <iframe src="https://www.youtube.com/embed/j92EsnjMrz0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="landing-portfolio-video-containers col-12 col-lg-6">
            <div class="landing-video-containers">
                <div class="landing-video">
                    <iframe src="https://www.youtube.com/embed/0PQj7-i4PGQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="landing-portfolio-video-containers col-12 col-lg-6">
            <div class="landing-video-containers">
                <div class="landing-video">
                    <iframe src="https://www.youtube.com/embed/HrjfZEhJaQ0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="landing-portfolio-video-containers col-12 col-lg-6 ">
            <div class="landing-video-containers">
                <div class="landing-video">
                    <iframe src="https://www.youtube.com/embed/OmmwpactVLc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="col-12" id="interested-in-more-services">
            <router-link to="/portfolio">
                <div class="custom-button" style="">
                    <span>View Portfolio</span>
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
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
    .landing-portfolio-video-containers {
        height: 300px;
    }
    .landing-video-containers {
        height: 100%;
        padding: 15px;
    }
    .landing-video {
        height: 100%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .landing-video iframe {
        width: 100%;
        height: 100%;
    }

    /***** MEDIA QUERIES *****/

    /* MOBILE - PORTRAIT*/
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px){
        .what-i-do {
            font-size: 3rem;
        }
        .what-i-do-container {
            margin-bottom: 0;
        }
    }

    /*MOBILE - LANDSCAPE*/
    @media only screen
    and (min-device-width: 481px)
    and (max-device-width: 825px) {

    }
</style>
