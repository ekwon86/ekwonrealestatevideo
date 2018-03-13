<template>
    <div id="top-navbar">
        <div class="container navbar-container">
            <div class="row" style="height: 100%;">
                <div class="col-1 navbar-subcontainers logo-container">
                    <img src="../assets/logo.png" alt="EKLogo" id="eklogo" @click="goHome">
                </div>
                <div class="col-3 navbar-subcontainers banner-container">
                    <div class="vertical-center-content">
                        <p class="banner-text ek-banner">EK PRODUCTIONS</p>
                        <p class="banner-text bottom-banner">REAL ESTATE VIDEOGRAPHY & PHOTOGRAPHY</p>
                    </div>
                </div>
                <div class="col-8 navbar-subcontainers nav-link-container text-right">
                    <div class="vertical-center-content">
                        <router-link to="/" class="nav-links">HOME</router-link>
                        <router-link to="/about" class="nav-links">ABOUT</router-link>
                        <router-link to="/services" class="nav-links">SERVICES</router-link>
                        <router-link to="/portfolio" class="nav-links">PORTFOLIO</router-link>
                        <router-link to="/contact" class="nav-links">CONTACT</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goHome() {
                this.$router.push('/');
            },
            scrollToTop() {
                alert('test');
            },
            checkScroll() {
                const navbar = document.getElementById('top-navbar');
                const windowHeight = Math.max(document.documentElement.clientHeight);
                const halfViewHeight = windowHeight / 2;
                if(document.documentElement.scrollTop || window.pageYOffset > halfViewHeight) {
                    navbar.style.backgroundColor = '#2e2e2e';
                } else {
                    navbar.style.backgroundColor = 'transparent';
                }
            }
        },
        created: function() {
            window.addEventListener('scroll', this.checkScroll);
        }
    }
</script>

<style scoped>

    .navbar-container {
        height: 100%;
    }
    .navbar-subcontainers {
        height: 100%;
    }
    .logo-container {
        text-align: center;
        padding: 0;
    }
    .banner-container {
        padding-left: 0;
    }
    .nav-links {
        margin-left: 30px;
        letter-spacing: 1px;
        color: white;
        transition: 0.2s;
        font-family: 'Unica One', cursive;
    }
    .nav-links:hover {
        color: #b4b4b4;
        text-decoration: none;
    }
    .banner-text {
        color: white;
        margin: 0;
        font-family: 'Unica One', cursive;
    }
    .ek-banner {
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 1px;
        border-bottom: 1px solid rgba(255,255,255,0.4);
    }
    .bottom-banner {
        margin-top: 3px;
        font-size: 14px;
    }
    #eklogo {
        height: 60px;
        width: 60px;
        position: relative;
        top: 50%;
        transform:translateY(-50%);
    }
    #eklogo:hover {
        cursor: pointer;
    }
    #top-navbar {
        width: 100vw;
        height: 100px;
        padding: 15px 0;
        position: fixed;
        top: 0;
        z-index: 99999;
        left: 0;
        transition: 0.5s;
    }
    .vertical-center-content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
</style>