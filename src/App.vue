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
        min-height:100vh;
        height: auto;
    }
</style>
