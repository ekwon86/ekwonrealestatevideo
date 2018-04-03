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
        border: 3px solid white;
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


    /*MEDIA QUERIES*/
    @media only screen and (max-width: 600px) {
        .rdy-to-talk-banner {
            font-size: 1.75rem;
            margin-bottom: 10px;
        }
        .learn-more-button {
            font-weight: bold;
        }
    }
</style>
