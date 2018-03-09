<template>
    <div id="about">
        <div id="about-background">
            <div class="overlay"></div>
            <div class="container about-banner-container">
                <h1 class="about-me">About</h1>
            </div>
        </div>
        <div class="container" id="about-info">
            <h1>Did you know that 73% of sellers are likely to list an agent utilizing video? Only 1% of agents offer video utilizing video as a marketing tool. Let me help you seize the opportunity!</h1>
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
    .about-me {
        font-size: 7rem;
        color: white;
        text-transform: uppercase;
        padding-bottom: 15px;
        font-family: 'Oswald', sans-serif;
    }
    .about-banner-container {
        position: relative;
        top: 50%;
        text-align: right;
        transform:translate(0,-50%);
    }
    #about-background {
        height: 700px;
        width: 100%;
        position: relative;
        border: transparent;
        background: url("../assets/pic3.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #about-info {
        height: 100vh;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>