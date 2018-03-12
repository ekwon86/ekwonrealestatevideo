<template>
    <div id="project1" class="portfolio-project-page">
        <div class="project-main-background-container">
            <div class="project-main-background-dark-overlay"></div>
            <div class="project-main-background-overlay" id="project1-background"></div>
        </div>
        <div class="project-description-container container">
            <div class="row">
                <div class="col-12 text-right return-to-portfolio-container">
                    <router-link to="/portfolio">
                        <span class="return-to-portfolio"><i class="fas fa-arrow-left goback-icon"></i>Return to Portfolio</span>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12 project-description-subcontainer">
                    <Carousel :projectInfo="projectInfo"/>
                </div>
            </div>
            <div class="row">
                <div class="col-6 project-info-left-container">
                    <p class="project-address project-2-address">1415 Mesa Verde</p>
                    <p class="project-city project-2-city">Fullerton</p>
                    <p class="project-date">02  /  04  /  2018</p>
                </div>
                <div class="col-6 project-info-right-container">
                    <p class="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis neque vitae sodales tempor. Suspendisse accumsan ex sed laoreet condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consectetur fermentum ante elementum vehicula. Quisque quam quam, consequat at fermentum a, mollis malesuada orci. Pellentesque ligula est, rhoncus et viverra in, blandit eget turpis. Aliquam erat volutpat. Quisque eget nibh at felis placerat tristique. Vestibulum quis lobortis mi, quis vehicula sem.</p>
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
                    pictures: ['pic3.3fc47fdd', 'pic4.9cdd2694', 'pic5.05157a59' ]
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
        background: url("../../assets/pic2.jpg");
    }
</style>
