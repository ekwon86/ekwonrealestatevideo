<template>
    <div id="contact">
        <div id="contact-background">
            <div class="overlay"></div>
            <div class="container contact-banner-container">
                <h1 class="contact-me-banner">GET IN TOUCH</h1>
            </div>
        </div>
        <div class="container" id="contact-info">
            <h1>Contact</h1>
        </div>
    </div>
</template>


<script></script>

<style scoped>
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.5);
    }
    .contact-me-banner {
        font-size: 7rem;
        color: white;
        text-transform: uppercase;
        padding-bottom: 15px;
        font-family: 'Oswald', sans-serif;
    }
    .contact-banner-container {
        position: relative;
        top: 50%;
        text-align: right;
        transform:translate(0,-50%);
    }
    #contact-background {
        height: 700px;
        width: 100%;
        position: relative;
        border: transparent;
        background: url("../assets/pic5.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #contact-info {
        height: 100vh;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>