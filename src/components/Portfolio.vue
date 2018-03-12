<template>
    <div id="portfolio">
        <div id="portfolio-background">
            <div class="overlay"></div>
            <div class="container portfolio-banner-container">
                <h1 class="portfolio-banner">My Work</h1>
            </div>
        </div>
        <div class="container" id="portfolio-info">
            <p class="projects-banner">PROJECTS</h1>
            <div v-for="project in projects" class="project-containers" :style="{ backgroundImage: 'url(\'' + project.imgPath + '\')' }">
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Project 1', imgPath: '../assets/pic1.jpg' },
        { title: 'Project 2', imgPath: '../assets/pic2.jpg' },
        { title: 'Project 3', imgPath: '../assets/pic3.jpg' }
      ]
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
    .projects-banner {
        font-family: 'Oswald', sans-serif;
        font-size: 4em;
        border-bottom: 1px solid rgba(0,0,0,0.3);
    }
    .portfolio-banner-container {
        position: relative;
        top: 50%;
        text-align: right;
        transform:translate(0,-50%);
    }
    #portfolio-background {
        height: 700px;
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
      /*background-image: url('../assets/pic1.jpg');*/
      background-size: cover;
      background-position: center;
    }
    .project-containers-overlay {
      height: 100%;
      width: 100%;
    }
</style>
