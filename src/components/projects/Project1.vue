<template>
    <div id="project1" class="portfolio-project-page">
        <div class="project-main-background-container">
            <div class="project-main-background-dark-overlay"></div>
            <div class="project-main-background-overlay" id="project1-background"></div>
        </div>
        <div class="project-description-container container">
            <div class="row">
                <div class="col-12 text-right return-to-portfolio-container">
                    <span class="return-to-portfolio"><i class="fas fa-arrow-left goback-icon"></i>Return to Portfolio</span>
                </div>
                <div class="col-12 project-description-subcontainer">
                    <Carousel :projectInfo="projectInfo"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from './carousel/Carousel.vue';
export default {
    data() {
        return {
            projectInfo: {
                pictures: [ 'pic1.551db4dc', 'pic2.4caa3c41', 'pic3.3fc47fdd' ]
            }
        }
    },
    components: {
        Carousel
    }
}

</script>

<style>
    #project1-background {
        background: url("../../assets/pic1.jpg");
    }
</style>
