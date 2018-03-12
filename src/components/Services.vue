<template>
    <div id="services">
        <div id="services-background">
            <div class="overlay"></div>
            <div class="container services-banner-container">
                <h1 class="services-banner">Services</h1>
            </div>
        </div>
        <div class="container" id="services-info">
        </div>
    </div>
</template>


<script></script>

<style scoped>
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.33);
    }
    .services-banner {
        font-size: 7rem;
        color: white;
        text-transform: uppercase;
        padding-bottom: 15px;
        font-family: 'Oswald', sans-serif;
    }
    .services-banner-container {
        position: relative;
        top: 50%;
        text-align: right;
        transform:translate(0,-50%);
    }
    #services-background {
        height: 600px;
        width: 100%;
        position: relative;
        border: transparent;
        background: url("../assets/pic2.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #services-info {
        height: 100vh;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
