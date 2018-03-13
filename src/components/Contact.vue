<template>
    <div id="contact">
        <div id="contact-background" class="page-landing-backgrounds">
            <div class="overlay"></div>
            <div class="container page-banner-containers">
                <h1 class="page-banners">GET IN TOUCH</h1>
            </div>
        </div>
        <div class="container" id="contact-info">
            <div class="row">
                <div class="col let-me-help-container">
                    <p class="let-me-help">Let me help market your property with stunning visual content today!</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p></p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row" id="map-container">
                <div class="col" id="map">

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
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        },
        mounted() {
            this.initMap();
        }
    }

</script>

<style scoped>
    #contact-background {
        background: url("../assets/pic5.jpg");
    }
    .let-me-help {
        font-family: 'Oswald', sans-serif;
        font-size: 2rem;
        text-align: justify;
        letter-spacing: 1px;
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 1px solid black;
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
    }
</style>