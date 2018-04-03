<template>
    <div id="footer">
        <div class="container footer-container">
            <div class="row">
                <div class="col text-center">
                    <span class="contact-info">714.402.5268 &nbsp; •&nbsp; &nbsp; <a class="email-link" href="mailto:info@ekrealestateproductions.com">info@ekrealestateproductions.com</a></span>
                </div>
            </div>
            <div class="row social-holder">
                <div class="col-12 text-center">
                    <a href="https://www.instagram.com/mrujin/" class="social-link" target="_blank">
                        <i class="fab fa-instagram social-icons"></i>
                    </a>
                    <a href="https://www.facebook.com/gene.kwon.3?ref=bookmarks" class="social-link" target="_blank">
                        <i class="fab fa-facebook social-icons"></i>
                    </a>
                    <a href="https://www.youtube.com/user/mrujin" class="social-link" target="_blank">
                        <i class="fab fa-youtube social-icons"></i>
                    </a>
                    <a href="https://www.twitter.com" class="social-link" target="_blank">
                        <i class="fab fa-twitter social-icons"></i>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <span class="copyright-content"><i class="far fa-copyright"></i>&nbsp;{{ year }} EK Real Estate Media</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: ''
        }
    },
    methods: {
        getCurrentYear() {
            const currentTime = new Date();
            this.year = currentTime.getFullYear();
        }
    },
    mounted() {
        this.getCurrentYear();
    }

}
</script>

<style scoped>
    #footer {
        height: 250px;
        width: 100%;
        background-color: #2e2e2e;
        color: white;
    }
    .footer-container {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .email-link {
        color: white;
    }
    .fa-circle {
        margin-left: 25px;
        margin-right: 25px;
        width: 5px;
        height: 5px;
    }
    .social-holder {
        margin: 25px 0;
    }
    .social-circle-holder {
        display: inline-block;
        height: 250px;
        width: 250px;
        text-align: center;
        position: relative;
        border: 1px solid white;
        border-radius: 999em;
    }
    .social-link {
        font-size: 25px;
        color: white;
        transition: 0.3s;
        margin: 0 15px;
    }
    .social-link:hover {
        color: #e0e0e0;
    }
    .footer-logo {
        width: 50px;
        height: 50px;
    }

    /*MEDIA QUERIES*/
    @media only screen and (max-width: 600px) {
        #footer {
            height: 175px;
        }
        .social-icons  {
            font-size: 20px;
        }
        .social-holder {
            margin: 10px 0;
        }
        .contact-info, .copyright-content {
            font-size: 12px;
        }
    }
</style>