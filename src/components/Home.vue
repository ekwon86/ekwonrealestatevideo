<template>
    <div id="home">
        <div id="landing-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="the-future">The <span class="future">Future</span></h1>
                <h1 class="of-real-estate-marketing">of Real Estate Marketing</h1>
            </div>
        </div>
        <div id="landing-info">
            <!-- INTRO STATEMENT -->
            <div class="container">
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
            </div>
            <!-- TYPES OF SERVICES -->
            <div id="home-services">
                <div class="container">
                    <Homeservices/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Homeservices from './subcomponents/Homeservices.vue';
export default {
    components: {
        Homeservices,
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
        font-size: 2rem;
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

    #home-services {
        background-color: white;
    }

</style>
