<template>
    <div id="footer">
        <div class="container full-height">
            <div class="row full-height">
                <div class="col-6 footer-containers footer-container-left">
                    <div class="footer-subcontainers">
                        <div class="footer-icon-containers">
                            <i class="fas fa-map-marker-alt footer-content"></i>
                        </div>
                        <div class="footer-info-containers">
                            <span class="left-footer-content footer-content">ORANGE COUNTY, CA</span>
                        </div>
                    </div>
                    <div class="footer-subcontainers">
                        <div class="footer-icon-containers">
                            <i class="fas fa-phone footer-content"></i>
                        </div>
                        <div class="footer-info-containers">
                            <span class="left-footer-content footer-content">714-402-5268</span>
                        </div>
                    </div>
                    <div class="footer-subcontainers">
                        <div class="footer-icon-containers">
                            <i class="far fa-envelope footer-content"></i>
                        </div>
                        <div class="footer-info-containers">
                            <a href="mailto:ekwon86@gmail.com">
                                <span class="left-footer-content footer-content">EKWON86@GMAIL.COM</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-6 footer-containers footer-container-right">
                    <div class="footer-subcontainer-right">
                        <div class="follow-me-container">
                            <span class="follow-me">Follow me on social media</span>
                        </div>
                        <div class="social-containers">
                            <span class="social-icons">
                                  <a href="https://www.instagram.com/mrujin/" class="social-link" target="_blank">
                                     <i class="fab fa-instagram"></i>
                                  </a>
                            </span>
                        </div>
                        <div class="social-containers">
                            <span class="social-icons">
                                <a href="https://www.facebook.com/gene.kwon.3?ref=bookmarks" class="social-link" target="_blank">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </span>
                        </div>
                        <div class="social-containers">
                            <span class="social-icons">
                                <a href="https://www.youtube.com/user/mrujin" class="social-link" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </span>
                        </div>
                        <div class="social-containers">
                            <span class="social-icons">
                                <a href="https://www.twitter.com" class="social-link" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="copyright-container">
                        <span class="copyright-content"><i class="far fa-copyright"></i>2018 EK REAL ESTATE VIDEO</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
    .footer-container-right {
        text-align: right;
    }
    .footer-subcontainers {
        width: 100%;
        position: relative;
        margin-bottom: 25px;
    }
    .footer-content {
        color: white;
        font-family: 'Unica One', cursive;
        font-size: 1.25rem;
    }
    .copyright-content {
        color: white;
        font-family: 'Unica One', cursive;
        font-size: 0.8rem;
    }
    .footer-containers {
        padding: 0;
    }
    .footer-icon-containers {
        display: inline-block;
        width: 10%;
    }
    .footer-info-containers {
        display: inline-block;
        width: 90%;
    }
    #footer {
        height: 250px;
        width: 100%;
        background-color: #2e2e2e;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .full-height {
        height: 100%;
    }
    .copyright-container {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .fa-copyright {
        margin-right: 5px;
    }
    .social-containers {
        display: inline-block;
        width: 12%;
        text-align: right;
        height: auto;
        position: relative;
        padding: 5px;
    }
    .social-icons {
        color: white;
        font-size: 2rem;
        position: relative;
        transition: 0.3s;
    }
    .social-link {
        transition: 0.3s;
        color: white;
    }
    .social-link:hover {
        color: #b4b4b4;
        cursor: pointer;
    }
    .social-link:active {
        color: #828282;
    }
    .footer-subcontainer-right {
        padding-left: 50px;
        height: auto;
    }
    .follow-me-container {
        border-bottom: 1px solid rgba(255,255,255,0.3);
        padding-bottom: 5px;
    }
    .follow-me {
        font-family: 'Unica One', cursive;
        text-transform: uppercase;
        font-size: 1.5rem;
        color: white;
    }
</style>