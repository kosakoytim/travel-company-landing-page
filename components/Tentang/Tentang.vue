<template>
    <div>
        <parallax class="parallax-container" :speedFactor="0.30">
            <img class="hero-parallax" :src="getImgUrl($store.state.hero_photo_tentang)">
            <div class="hero-bg-color"></div>
            <div class="hero is-bold">
                <div class="hero-body">
                    <div class="hero-section has-text-centered">
                        <h1 class="title-hero">
                            Tentang {{$store.state.nama_travel}}
                        </h1>
                    </div>
                </div>
            </div>
        </parallax>
        <section class="container vision-section">
            <div class="tile is-child notification has-text-centered">
                <div class="vision-icon-container">
                    <img class="vision-icon" :src="require('../../assets/quote-right-solid.svg')">
                </div>
                <div class="vision-title">
                    <h3 class="title">Visi {{$store.state.nama_travel}}</h3>
                </div>
                <div class="vision-subtitle">
                    <p class="subtitle">
                        {{$store.state.visi_travel}}
                    </p>
                </div>
            </div>
        </section>
        <section class="container">
            <div class="section-title has-text-centered">
                <h3 class="title">Fokus Kami</h3>
            </div>
            <div class="columns focuses-container is-gapless">
                <div class="column focus-container has-text-centered" v-for="(item,index) in $store.state.fokus_travel" :key="index">
                    <div class="focus-icon-container">
                        <img class="focus-icon" :src="getImgUrl(item.icon)">
                    </div>
                    <p>{{item.note}}</p>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            color_styling_hero : {
                background : 'linear-gradient(to right, ' + this.$store.state.primary_color_dark2 + ',' + this.$store.state.primary_color_dark + ')'
            },
        }
    },
    methods : {
        getImgUrl(pic) {
            return require('../../assets/' + pic)
        },
    }
}
</script>

<style lang="sass" scoped>
@import ./tentang.sass
</style>
