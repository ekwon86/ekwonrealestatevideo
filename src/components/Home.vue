<template>
    <div id="home">
        <div id="landing-background">
            <div class="container">

            </div>
        </div>
        <div class="container" id="landing-info">
            <h1 class="let-me-help">Let me help showcase your listing with beautiful, professional videos & photos</h1>
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
    height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
}

.let-me-help {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
</style>