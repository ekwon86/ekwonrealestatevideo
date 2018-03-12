<template>
  <div id="app">
      <Navbar/>
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
      <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import Services from './components/Services.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    Footer
  }
}
</script>

<style>
    /*VUE TRANSITIONS*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-15px);
        opacity: 0;
    }

    /*PAGE TEMPLATE ITEMS*/
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.5);
    }
    .page-landing-backgrounds {
        height: 600px;
        width: 100%;
        position: relative;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .page-banner-containers {
        position: relative;
        top: 50%;
        text-align: right;
        transform:translate(0,-50%);
    }
    .page-banners {
        font-size: 7rem;
        color: white;
        text-transform: uppercase;
        padding-bottom: 15px;
        font-family: 'Oswald', sans-serif;
    }

    /*PORTFOLIO PROJECT PAGES*/
    .portfolio-project-page {
        height:100vh;
        position: relative;

        padding: 0;
    }

    .portfolio-project-content {
        padding-top: 150px;
    }
    .project-main-background-container {
        height: 100%;
        width: 100%;
        background-color: black;
        overflow: hidden;
        position: absolute;
    }
    .carousel-item img {
        width: auto;
        max-height: 600px;
        overflow: hidden;
    }
    .project-main-background-dark-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 100;
    }
    .project-main-background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        height: 100%;
        width: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);a
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
        transform: scale(1.1);
    }
    .return-to-portfolio-container {
        padding: 0;
        margin-bottom: 15px;
    }
    .return-to-portfolio {
        color: white;
        font-family: 'Oswald', sans-serif;
        font-size: 1em;
        letter-spacing: 3px;
        text-transform: uppercase;
        transition: 0.2s;
    }
    .return-to-portfolio:hover {
        cursor: pointer;
        color: #c7c7c7;
    }
    .return-to-portfolio:active {
        color: #b3b3b3;
    }
    .goback-icon {
        margin-right: 10px;
    }
    .project-description-container {
        position: relative;
        padding-top: 150px;
        z-index: 200;
    }
    .project-description-subcontainer {
        min-height: 500px;
        border: transparent;
        height: auto;
        padding: 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        background-color: #fff;
    }
</style>
