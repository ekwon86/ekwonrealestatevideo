<template>
    <div id="contact">
        <div id="contact-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="page-banners">GET IN TOUCH</h1>
            </div>
        </div>
        <div class="container" id="contact-info">
            <div class="row form-group">
                <div class="col">
                    <div class="form-group">
                        <p class="contact-us-banner">CONTACT US</p>
                        <div class="contact-us-subcontainers">
                            <p><i class="fas contact-us-icons fa-map-marker-alt"></i>&nbsp;&nbsp; Orange County, CA</p>
                        </div>
                        <div class="contact-us-subcontainers">
                            <p class="contact-us-phone"><i class="fas contact-us-icons fa-phone"></i>&nbsp;&nbsp; 714-402-5268</p>
                            <p><i class="far contact-us-icons fa-envelope"></i>&nbsp;&nbsp; info@ekrealestatemedia.com</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="fullName">Full Name: <span class="required">*</span></label>
                        <input type="text" class="form-control" id="fullName">
                    </div>
                    <div class="form-group">
                        <label for="emailAddress">Email Address: <span class="required">*</span></label>
                        <input type="text" class="form-control" id="emailAddress">
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number: <span class="required">*</span></label>
                        <input type="text" class="form-control" id="phoneNumber">
                    </div>
                    <div class="form-group">
                        <label for="propertyAddress">Property Address: <span class="required">*</span></label>
                        <input type="text" class="form-control" id="propertyAddress">
                    </div>
                    <div class="form-group">
                        <label for="message">Message: <span class="required">*</span></label>
                        <textarea type="text" class="form-control" id="message" rows="5"></textarea>
                    </div>
                </div>
                <div class="col">
                    <div class="col" id="map"></div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-outline-primary">Send Message</button>
                </div>
            </div>
        </div>
        <!--<div class="container-fluid">-->
            <!--<div class="row" id="map-container">-->
                <!--<div class="col" id="map"></div>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            initMap() {
                const latlng = new google.maps.LatLng(33.8704, -117.9242);
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: latlng
                });
                const marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
            }
        },
        mounted() {
            this.initMap();
        }
    }

</script>

<style scoped>
    .required {
        color: red;
    }
    #contact-background {
        background: url("../assets/pic5.jpg");
    }
    .contact-us-banner {
        font-family: 'Oswald', sans-serif;
        font-size: 2rem;
        text-align: justify;
        letter-spacing: 1px;
        font-weight: bold;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        text-transform: uppercase;
    }
    .contact-us-subcontainers {
        display: inline-block;
        width: 50%;
        height: 50px;
        vertical-align: top;
    }
    .contact-us-icons {
        color: #5f5f5f;
    }
    .contact-us-phone {
        margin-bottom: 8px;
    }
    #contact-info {
        min-height: 600px;
        height: auto;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    #map-container {
        height: 400px;
    }
    #map {
        height: 100%;
        /*-webkit-filter: grayscale(100%); !* Safari 6.0 - 9.0 *!*/
        /*filter: grayscale(100%);*/
    }
    textarea {
        resize: none;
    }
</style>