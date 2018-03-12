<template>
    <div id="portfolio">
        <div id="portfolio-background">
            <div class="overlay"></div>
            <div class="container portfolio-banner-container">
                <h1 class="portfolio-banner">My Work</h1>
            </div>
        </div>
        <div class="container" id="portfolio-info">
            <div v-for="(project, index) in projects" class="project-containers" :style="{ 'background-image': 'url(/img/' + project.imgPath + '.jpg)' }" @mouseover="showProjectInfo(index)" @mouseleave="hideProjectInfo(index)">
                <transition name="slide-fade">
                    <div class="project-containers-overlay" v-if="project.show">
                        <div class="project-title-container">
                            <h1>{{ project.title }}</h1>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
      return {
        projects: [
          { title: '127 Pointe Drive', imgPath: 'pic1.551db4dc', show: false },
          { title: '1415 Mesa Verde', imgPath: 'pic2.4caa3c41', show: false },
          { title: '6247 San Ricardo', imgPath: 'pic3.3fc47fdd', show: false }
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
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.5);
    }
    .portfolio-banner {
        font-size: 7rem;
        color: white;
        text-transform: uppercase;
        padding-bottom: 15px;
        font-family: 'Oswald', sans-serif;
    }
    .portfolio-banner-container {
        position: relative;
        top: 50%;
        text-align: right;
        transform:translate(0,-50%);
    }
    #portfolio-background {
        height: 600px;
        width: 100%;
        position: relative;
        border: transparent;
        background: url("../assets/pic4.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #portfolio-info {
        height: auto;
        min-height: 50vh;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .project-containers {
        height: 300px;
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
        font-size: 6em;
        color: white;
        text-transform: uppercase;
    }
</style>
