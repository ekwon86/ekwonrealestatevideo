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
                <div class="col-12 col-lg-6">
                    <div class="contact-us-container">
                        <p class="contact-us-banner">CONTACT US</p>
                        <p><i class="fas contact-us-icons fa-map-marker-alt"></i>&nbsp;&nbsp; Orange County, CA</p>
                        <p><i class="fas contact-us-icons fa-phone"></i>&nbsp;&nbsp; 714-402-5268</p>
                        <p><i class="far contact-us-icons fa-envelope"></i>&nbsp;&nbsp; info@ekrealestatemedia.com</p>
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
                    <div class="send-btn-container">
                        <button class="btn btn-success" id="desktop-send-btn">Send Message</button>
                        <button class="btn btn-success btn-block" id="mobile-send-btn">Send Message</button>
                    </div>
                </div>
                <div class="col-12 col-lg-6" id="map-container">
                    <div class="col" id="map"></div>
                </div>
            </div>
        </div>
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
    .contact-us-container {
        height: auto;
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
    .contact-us-icons {
        color: #ff5427;
    }
    #contact-info {
        min-height: 600px;
        height: auto;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    #map-container {
        height: 700px;
    }
    #map {
        height: 100%;
    }
    textarea {
        resize: none;
    }
    #desktop-send-btn {
        display: block;
    }
    #mobile-send-btn {
        display: none;
    }

    /*MEDIA QUERIES*/
    @media only screen and (max-width: 600px) {
        #desktop-send-btn {
            display: none;
        }
        #mobile-send-btn {
            display: block;
        }
        .send-btn-container {
            margin-bottom: 50px;
        }
        #map-container {
            height: 250px;
        }
    }
</style>