<template>
    <div id="top-navbar">
        <div class="container navbar-container" id="large-device-navbar">
            <div class="row" style="height: 100%;">
                <div class="col-2 col-lg-1 navbar-subcontainers logo-container">
                    <img src="../assets/logo.png" alt="EKLogo" id="eklogo" @click="goHome">
                </div>
                <div class="col-7 col-lg-4 navbar-subcontainers banner-container">
                    <div class="vertical-center-content">
                        <p class="banner-text ek-banner">EK REAL ESTATE MEDIA</p>
                        <p class="banner-text bottom-banner">REAL ESTATE VIDEOGRAPHY & PHOTOGRAPHY</p>
                    </div>
                </div>
                <div class="col-lg-7 navbar-subcontainers nav-link-container text-right">
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="mobile-navbar">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" width="30" height="30" alt="">
                EK Real Estate Media
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="navbar-btn">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/">
                            <a class="nav-link" href="#" @click="dismissNavbar">Home</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about">
                            <a class="nav-link" href="#" @click="dismissNavbar">About</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/services">
                            <a class="nav-link" href="#" @click="dismissNavbar">Services</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/portfolio">
                            <a class="nav-link" href="#" @click="dismissNavbar">Portfolio</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact">
                            <a class="nav-link" href="#" @click="dismissNavbar">Contact</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
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
            },
            dismissNavbar() {
                let navbtn = document.getElementById('navbar-btn');
                navbtn.click();
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
    #mobile-navbar {
        display: none;
    }

    /***** MEDIA QUERIES *****/

    /*MOBILE - PORTRAIT*/
    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px){
        .navbar-brand {
            font-family: 'Unica One', cursive;
            text-transform: uppercase;
        }
        .nav-link-container {
            display: none;
        }
        .ek-banner {
            font-size: 18px;
        }
        .bottom-banner {
            font-size: 12px;
        }
        #eklogo {
            width: 40px;
            height: 40px;
        }
        #top-navbar {
            height: 60px;
            padding: 0;
        }
        #mobile-navbar {
            display: flex;
        }
        #large-device-navbar {
            display: none;
        }
    }

    /*MOBILE - LANDSCAPE*/
    @media only screen
    and (min-device-width: 481px)
    and (max-device-width: 825px) {
        #large-device-navbar, .nav-link-container {
            display: none;
        }

        #mobile-navbar {
            display: flex;
        }

        #eklogo {
            width: 40px;
            height: 40px;
        }
        #eklogo {
            width: 40px;
            height: 40px;
        }
        #top-navbar {
            height: 60px;
            padding: 0;
        }
    }
</style>
