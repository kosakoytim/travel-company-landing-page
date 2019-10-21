<template>
    <div>
        <parallax class="parallax-container" :speedFactor="0.30">
            <img class="hero-parallax" :src="getImgUrl($store.state.hero_photo_jadwal)">
            <div class="hero-bg-color"></div>
            <div class="hero is-bold">
                <div class="hero-body">
                    <div class="hero-section has-text-centered">
                        <h1 class="title-hero">
                            Rute Tersedia
                        </h1>
                    </div>
                </div>
            </div>
        </parallax>
        <section class="container">
            <div class="rute" v-for="(item,index) in $store.state.jadwal_tersedia" :key="index">
                <div class="nama-rute">
                    <span>{{item.judul}}</span>
                    <span>
                        <a class="button button-pesan-online" href="https://play.google.com/store/apps/details?id=com.kunkun.sikomoID&hl=en_US" target="_blank">
                            <span>Pesan Online</span>
                        </a>
                    </span>
                </div>
                <div class="table-rute">
                    <table class="table is-fullwidth is-striped is-bordered is-hoverable">
                        <thead>
                            <tr>
                                <th><abbr title="No">No</abbr></th>
                                <th><abbr title="Rute">Rute</abbr></th>
                                <th class="has-text-centered"><abbr title="Harga Tiket">Harga Tiket</abbr></th>
                                <th class="has-text-centered"><abbr title="Jam Berangkat">Jam Berangkat</abbr></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item2,index) in item.rute" :key="index">
                                <td>{{index + 1}}</td>
                                <td>{{item2.nama_rute}}</td>
                                <td>{{item2.harga_tiket}}</td>
                                <td>{{item2.jam_berangkat}}</td>
                            </tr>                        
                        </tbody>
                    </table>
                </div>
                <div class="footnote-rute">
                    {{item.footnote}}
                </div>
            </div>  
        </section>

        <section class="container">
            <div class="travelbox-iklan">
                <a href="https://play.google.com/store/apps/details?id=com.kunkun.sikomoID&hl=en_US" target="_blank">
                    <div class="columns iklan-content">
                        <div class="column is-7">
                            <div class="iklan-text-1">Pesan tiket Nusa Indah Trans melalui</div>
                            <div class="iklan-text-2">aplikasi Travelbox</div>
                        </div>
                        <div class="column has-text-centered"><img class="image-logo" :src="require('../../assets/logo-travelbox/travelbox_white2@4x.png')"></div>
                        <div class="column has-text-centered iklan-logo-google-play"><img class="image-googleplay" :src="require('../../assets/googleplay.png')"></div>
                    </div>
                </a>
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
    }
}
</script>

<style lang="sass" scoped>
@import ./jadwal.sass
</style>
