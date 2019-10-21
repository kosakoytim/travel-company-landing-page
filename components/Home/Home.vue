<template>
    <div>
        <section class="hero">
            <carousel class="carousel-container" :autoplay="true" :perPage="1" :paginationActiveColor="$store.state.primary_color">
                <slide class="carousel-image-container" v-for="item in $store.state.hero_photos" :key="item.index">
                    <img class="carousel-image1" :src="getImgUrl(item)">
                </slide>
            </carousel>
            <div class="container container-hero-texts">
                <div class="title-hero">
                    {{$store.state.hero_title}}
                </div>
                <div class="subtitle-hero">
                    {{$store.state.hero_subtitle}}
                </div>
                <a class="button button-hero-lihat-jadwal" href="/jadwal">
                    Lihat Jadwal
                </a>
            </div>
        </section>
        <section class="container below-hero">
            <div class="columns">
                <div class="column">
                    <carousel class="carousel-container" :autoplay="true" :perPage="1"  :paginationActiveColor="$store.state.primary_color">
                        <slide class="carousel-image-container" v-for="item in $store.state.more_travel_photos" :key="item.index">
                            <img class="carousel-image2" :src="getImgUrl(item)">
                        </slide>
                    </carousel>
                </div>
                <div class="column section-fasilitas">
                    <h1 class="title">
                        Armada Terbaik
                    </h1>
                    <h4 class="subtitle">
                        yang membawa anda
                    </h4>

                    <div class="columns is-gapless">
                        <div class="column">
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-door-to-door.png')"></span>
                                <span>Dijemput</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-musik.png')"></span>
                                <span>Musik</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-bantal.png')"></span>
                                <span>Bantal</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-air-mineral.png')"></span>
                                <span>Air Mineral</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-no-smoking.png')"></span>
                                <span>Bebas Asap Rokok</span>
                            </div>
                        </div>
                        <div class="column">
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-ac.png')"></span>
                                <span>Mobil AC</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-selimut.png')"></span>
                                <span>Selimut</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-snack.png')"></span>
                                <span>Snack</span>
                            </div>
                            <div class="fasilitas-container">
                                <span><img class="image-logo" :src="require('../../assets/fasilitas-detail-travel/fasilitas-asuransi.png')"></span>
                                <span>Asuransi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="has-text-centered"> 
                <h1 class="title">Rute Tersedia</h1>
            </div>
            <div class="is-desktop-only">
                <div class="rute-card" v-for="rute in $store.state.rute_tersedia" :key="rute.index">
                    <div class="border-card">
                        <div class="rute-title">{{rute.judul}}</div>
                        <div class="columns is-gapless">
                            <div class="column start-point">
                                <div class="columns is-gapless">
                                    <div class="column">
                                        <div class="point-title-start">{{rute.titik_awal}}</div>
                                    </div>
                                    <div class="column">
                                        <div class="city-point"></div>
                                        <div class="line-point-connector"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="column" v-for ="(titik,index) in rute.titik_tengah" :key="index">
                                <div class="columns is-gapless">
                                    <div class="column" v-if="isOdd(index) == false">
                                        <div class="point-title-below">{{titik}}</div>
                                        <div class="city-point"></div>
                                        <div class="line-point-connector"></div>  
                                    </div>
                                    <div class="column" v-if="isOdd(index) == true">
                                        <div class="point-title-up-top">{{titik}}</div>
                                        <div class="city-point"></div>
                                        <div class="line-point-connector"></div>  
                                    </div>
                                </div>
                            </div>
                            <div class="column end-point">
                                <div class="columns is-gapless">
                                    <div class="column">
                                        <div class="city-end-point"></div>
                                        <div class="line-point-connector"></div>  
                                    </div>
                                    <div class="column" v-if="isOdd(rute.titik_tengah.length) == false">
                                        <div class="point-title-below point-title-end">{{rute.titik_akhir}}</div>
                                    </div>
                                    <div class="column" v-if="isOdd(rute.titik_tengah.length) == true">
                                        <div class="point-title-up-top point-title-end">{{rute.titik_akhir}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="is-mobile-tablet-only">
                <div class="rute-card" v-for="rute in $store.state.rute_tersedia" :key="rute.index">
                    <div class="border-card">
                        <div class="rute-title">{{rute.judul}}</div>
                        <div>
                            <div class="start-point2">
                                <div> 
                                    <span><div class="city-end-point2"></div></span>
                                    <span>{{rute.titik_awal}}</span>
                                </div>
                                
                                <div class="line-point-connector2"></div>
                            </div>
                            <div class="middle-point2" v-for ="(titik,index) in rute.titik_tengah" :key="index">
                                <div> 
                                    <span><div class="city-end-point2"></div></span>
                                    <span>{{titik}}</span>
                                </div>
                                <div class="line-point-connector2"></div>
                            </div>
                            <div class="end-point2">
                                <div> 
                                    <span><div class="city-end-point2"></div></span>
                                    <span>{{rute.titik_akhir}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        getImgUrl(pic) {
            return require('../../assets/' + pic)
        },
        isOdd(num) {
            return (num % 2) == 1;
        }
    }
}
</script>

<style lang="sass" scoped>
@import ./home.sass
</style>
