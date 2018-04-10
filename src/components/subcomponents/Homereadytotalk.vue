<template>
    <div>
        <div class="row">
            <div class="col-12 text-center what-i-do-container">
                <h1 class="rdy-to-talk-banner">Ready to stop your clients in their tracks?</h1>
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

</template>


<script></script>

<style scoped>
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

    /***** MEDIA QUERIES *****/

    /* MOBILE - PORTRAIT*/
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px){
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

    }
</style>
