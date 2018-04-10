<template>
    <div id="portfolio">
        <div id="portfolio-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="page-banners">Our Work</h1>
            </div>
        </div>
        <div class="container" id="portfolio-info">
            <div v-for="(project, index) in projects" class="project-containers" :style="{ 'background-image': 'url(/img/' + project.imgPath + '.jpg)' }" @mouseover="showProjectInfo(index)" @mouseleave="hideProjectInfo(index)">
                    <router-link :to="'/' + project.url">
                        <transition name="slide-fade">
                            <div class="project-containers-overlay" v-if="project.show">
                                <div class="project-title-container">
                                    <h1>{{ project.title }}</h1>
                                </div>
                            </div>
                        </transition>
                    </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
      return {
        projects: [
          {
              title: '127 Pointe Drive',
              imgPath: 'pic1.551db4dc',
              url: 'project1',
              show: false
          },
          {
              title: '1415 Mesa Verde',
              imgPath: 'pic2.4caa3c41',
              url: 'project2',
              show: false
          },
          {
              title: '6247 San Ricardo',
              imgPath: 'pic3.3fc47fdd',
              url: 'project3',
              show: false
          },
          {
              title: '3547 S. Copperwood Avenue',
              imgPath: 'pic4.9cdd2694',
              url: 'project4',
              show: false
          }
        ]
      }
    },
    methods: {
        showProjectInfo(index) {
            this.projects[index].show = true;
        },
        hideProjectInfo(index) {
            this.projects[index].show = false;
        }
    }
}
</script>

<style scoped>

    #portfolio-background {
        background: url("../assets/pic4.jpg");
    }
    #portfolio-info {
        height: auto;
        min-height: 50vh;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .project-containers {
        height: 100px;
        position: relative;
        margin: 40px 0;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .project-containers:hover {
        cursor: pointer;
    }
    .project-containers-overlay {
        height: 125%;
        width: 100%;
        position: absolute;
        top: -10%;
        left: 0;
        background-color: rgba(0,0,0,0.6);
        text-align: center;
    }
    .project-title-container {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .project-title-container h1 {
        font-family: 'Oswald', sans-serif;
        font-size: 5em;
        color: white;
        text-transform: uppercase;
    }


    /***** MEDIA QUERIES *****/

    /* MOBILE - PORTRAIT*/
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px){

    }


    /*MOBILE - LANDSCAPE*/
    @media only screen
    and (min-device-width: 481px)
    and (max-device-width: 825px) {

    }
</style>
