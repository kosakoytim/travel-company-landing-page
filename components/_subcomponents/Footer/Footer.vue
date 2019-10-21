<template>
    <footer class="footer" v-bind:style="color_styling_footer">
        <div class="columns">
            <div class="column footer-column">
                <div class="logo">
                    <img :src="getImgUrl($store.state.logo_travel_white)" width="150">
                </div>
                <div class="footer-travel-name">
                    {{$store.state.nama_travel}}
                </div>
                <div class="footer-travel-place" v-for="(item,index) in $store.state.alamat_travel" :key="index">
                    <div class="footer-travel-address-name">
                        {{item.nama_kantor}}
                    </div>
                    <div class="footer-travel-address">
                        {{item.alamat_kantor}}
                    </div>
                </div>
            </div>
            <div class="column footer-column">
                <div class="footer-travel-contact">
                    <div class="footer-travel-contact-label">
                        Kontak
                    </div>
                    <div class="footer-travel-contact-number" v-for="(item,index) in $store.state.kontak_travel" :key="index">
                        {{item}}
                    </div>
                </div>
                <div class="footer-travel-social-media">
                    <div class="footer-travel-social-media-label">
                        Media Sosial
                    </div>
                    <div>
                        <span>
                            <a :href="$store.state.media_sosial_travel.facebook_link">
                                <img class="image-socmed-logo" :src="require('../../../assets/facebook-logo.svg')">
                            </a>
                        </span>
                        <span>
                            <a :href="$store.state.media_sosial_travel.instagram_link">
                                <img class="image-socmed-logo" :src="require('../../../assets/instagram-logo.svg')">
                            </a>
                        </span>
                    </div>
                </div>
                <div class="footer-travel-place">
                    <div class="footer-travel-address-name">
                        Dibuat Oleh
                    </div>
                    <div class="footer-travel-address">
                        <a href="https://travelbox.id" target="_blank">www.travelbox.id</a>
                    </div>
                </div>
            </div>
            <div class="column is-2 footer-column">
                <div v-bind:style="color_styling_nav" class="nav button" @click="$router.push('/')"> Home </div>
                <div v-bind:style="color_styling_nav" class="nav button" @click="$router.push('/jadwal')"> Jadwal Travel</div>
                <div v-bind:style="color_styling_nav" class="nav button" @click="$router.push('/sewa-mobil')">Sewa Mobil </div>
                <div v-bind:style="color_styling_nav" class="nav button" @click="$router.push('/kirim-paket')">Kirim Paket</div>
                <div v-bind:style="color_styling_nav" class="nav button" @click="$router.push('/tentang')"> Tentang </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            color_styling_footer : {
                background : 'linear-gradient(to right, ' + this.$store.state.primary_color_dark + ',' + this.$store.state.primary_color_dark2 + ')'
            },
            color_styling_nav : {
                background : this.$store.state.primary_color
            }
        }
    },
    methods : {
        getImgUrl(pic) {
            return require('../../../assets/' + pic)
        },
    }
}
</script>

<style lang="sass" scoped>
@import ./footer.sass
</style>
