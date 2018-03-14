<template>
    <div class="row">
        <div class="col-12 text-center what-i-do-container">
            <h1 class="what-i-do">What We Do</h1>
            <p>We help real estate agents sell properties with less hassle, in less time, and for higher prices by offering the following services:</p>
        </div>
      
        <div class="col-12" id="interested-in-more-services">
            <router-link to="/services">
                <span class="custom-button" style="">Learn More</span>
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
