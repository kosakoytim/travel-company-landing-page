<template>
    <nav v-if="render_now" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a href="/">
                <div class="logo-container">
                    <img :src="getImgUrl($store.state.logo_travel_color)" class="logo">
                </div>
            </a>

            <a role="button" class="navbar-burger" v-bind:class="{ 'is-active': navbar_burger_active }"  @click="navbar_burger_active = !navbar_burger_active" aria-label="menu" aria-expanded="false">
                <span v-bind:style="color_styling_burger" aria-hidden="true"></span>
                <span v-bind:style="color_styling_burger" aria-hidden="true"></span>
                <span v-bind:style="color_styling_burger" aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-end" v-if="navbar_burger_active">
            <nuxt-link to="/" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Home
                </a>
            </nuxt-link>
            <nuxt-link to="/jadwal" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Jadwal Travel
                </a>
            </nuxt-link>
            <nuxt-link to="/sewa-mobil" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Sewa Mobil
                </a>
            </nuxt-link>
            <nuxt-link to="/kirim-paket" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Kirim Paket
                </a>
            </nuxt-link>
            <nuxt-link to="/tentang" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Tentang
                </a>
            </nuxt-link>
            
            
            
            <a class="navbar-item">
                <a class="button button-pesan-online">
                    <span class="icon">
                        <img class="bus-icon" :src="require('../../../assets/fasilitas-detail-travel/bus.png')">
                    </span>
                    <span class="pesan-online-text">Pesan Online</span>
                </a>
            </a>
            
        </div>
        <div class="navbar-end navbar-end-desktop">
            <nuxt-link to="/" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Home
                </a>
            </nuxt-link>
            <nuxt-link to="/jadwal" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Jadwal Travel
                </a>
            </nuxt-link>
            <nuxt-link to="/sewa-mobil" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Sewa Mobil
                </a>
            </nuxt-link>
            <nuxt-link to="/kirim-paket" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Kirim Paket
                </a>
            </nuxt-link>
            <nuxt-link to="/tentang" class="navbar-item navbar-item-right">
                <a v-bind:style="color_styling_nav_text" class="nav-text">
                    Tentang
                </a>
            </nuxt-link>
            
            
            
            <a class="navbar-item">
                <a v-bind:style="color_styling_button_pesan_online" class="button button-pesan-online"  href="https://play.google.com/store/apps/details?id=com.kunkun.sikomoID&hl=en_US" target="_blank">
                    <span class="icon">
                        <img class="bus-icon" :src="require('../../../assets/fasilitas-detail-travel/bus.png')">
                    </span>
                    <span class="pesan-online-text">Pesan Online</span>
                </a>
            </a>
            
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            render_now : false,
            navbar_burger_active : false,
            color_styling_burger : {
                background : this.$store.state.primary_color
            },
            color_styling_nav_text : {
                color : this.$store.state.primary_color_dark2
            },
            color_styling_button_pesan_online : {
                background: this.$store.state.primary_color,
                border : this.$store.state.primary_color_dark + ' !important'
            },
        }
    },
    mounted() {
        this.$nextTick(function () {
           this.render_now = true
        })
    },
    methods : {
        getImgUrl(pic) {
            return require('../../../assets/' + pic)
        },
    }
}
</script>

<style lang="sass" scoped>
@import ./header.sass
</style>
