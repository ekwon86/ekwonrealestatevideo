<template>
    <div id="home">
        <div id="landing-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
                <div class="container page-banner-containers" id="home-banner">
                    <transition name="main-banner">
                        <div v-if="showHomeBanner">
                            <h1 class="the-future" >The <span class="future">Future</span></h1>
                            <h1 class="of-real-estate-marketing">of Real Estate Marketing</h1>
                        </div>
                    </transition>
                </div>
        </div>
        <div id="landing-info">
            <!-- INTRO STATEMENT -->
            <div class="container" id="welcome-msg-container">
                <div class="row">
                    <div class="col-lg-6 col-12 let-us-help-showcase">
                        <h1 class="let-me-help">Let us help showcase your listing with beautiful, professional videos</h1>
                    </div>
                    <div class="col-lg-6 col-12 intro-text-container">
                        <p>Set yourself apart from the competition with a professional real estate marketing video to boldly showcase your property, highlight building features and surrounding local amenities.</p>
                        <p>From aerial drone videos to photographic stills we have a number of solutions and packages available to fulfill your marketing needs.</p>
                        <p>Our custom real estate videos provide your target audience with a rich and engaging experience that is sure to leave an impression. The final production consists of full motion video that is outputted as web-ready video that can be embedded on any website, sent via email, or shared on social media. </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- TYPES OF SERVICES -->
        <div id="home-services">
            <div class="container home-services-subcontainer">
                <Homeservices/>
            </div>
        </div>
        <div id="home-portfolio">
            <div class="container">
                <Homeportfolio/>
            </div>
        </div>
        <div id="home-rdy-to-talk">
            <div id="rdy-to-talk-overlay"></div>
            <div class="container">
                <Homereadytotalk/>
            </div>
        </div>
    </div>
</template>


<script>
import Homeservices from './subcomponents/Homeservices.vue';
import Homeportfolio from './subcomponents/Homeportfolio.vue'
import Homereadytotalk from './subcomponents/Homereadytotalk.vue';

export default {
    data() {
        return {
            showHomeBanner: false
        }
    },
    methods: {
        animateHomeBanner() {
            let self = this;
            setTimeout(function() {
                self.showHomeBanner = true;
            }, 250);
        }
    },
    components: {
        Homeservices,
        Homeportfolio,
        Homereadytotalk
    },
    mounted() {
        this.animateHomeBanner();
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
    .let-us-help-showcase {
        text-align: right;
    }
    .intro-text-container {
        text-align: justify;
    }

    .of-real-estate-marketing {
        font-size: 5rem;
        color: white;
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
    }
    #landing-background {
        background: url("../assets/pic1.jpg");
    }
    #landing-info {
        height: auto;
        padding: 100px 0;
    }
    .let-me-help {
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 3rem;
    }

    #home-services {
        padding: 100px 0;
        height: auto;
        background: url("../assets/servicesbg.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #rdy-to-talk-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.8);
        width: 100%;
        height: 100%;
    }
    #home-rdy-to-talk {
        position: relative;
        height: auto;
        background: url("../assets/pic1.jpg");
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 100px 0;
    }

    #home-portfolio {
        height: auto;
        padding: 100px 0;
    }
    .home-services-subcontainer {
        height: 100%;
    }

    .main-banner-enter-active {
        transition: all .3s ease;
    }
    .main-banner-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .main-banner-enter, .main-banner-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(-25px);
        opacity: 0;
    }

    /***** MEDIA QUERIES *****/

    /* MOBILE - PORTRAIT*/
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px){
        .the-future {
            font-size: 4rem;
            padding-bottom: 5px;
            border-bottom: none;
        }
        .of-real-estate-marketing {
            font-size: 2rem;
        }
        .let-us-help-showcase, .intro-text-container {
            text-align: center;
        }
        .let-us-help-showcase h1{
            font-size: 1.5rem;
            margin-bottom: 25px;
        }
        #landing-info, #home-services, #home-portfolio, #home-rdy-to-talk {
            padding: 60px 0;
        }
    }

    /*MOBILE - LANDSCAPE*/
    @media only screen
    and (min-device-width: 481px)
    and (max-device-width: 825px) {
        #landing-background {
            height: 90vh;
        }
        .the-future {
            font-size: 5.5rem;
            padding-bottom: 5px;
            border-bottom: none;
        }
        .of-real-estate-marketing {
            font-size: 2.5rem;
        }
        #home-banner {
            text-align: center;
        }

        .let-us-help-showcase, .intro-text-container {
            text-align: center;
        }
        .let-us-help-showcase h1{
            font-size: 2rem;
            margin-bottom: 25px;
        }

        #landing-info {
            padding: 50px 0;
        }
    }
</style>
