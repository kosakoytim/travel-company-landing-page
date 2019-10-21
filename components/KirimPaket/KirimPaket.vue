<template>
    <div>
        <div class="modal is-active" v-if="send_message_whatsapp_modal_opened">
            <div class="modal-background" @click="send_message_whatsapp_modal_opened = false"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Kirim Paket</p>
                    <button class="delete" aria-label="close" @click="send_message_whatsapp_modal_opened = false"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column">
                            <div class="modal-form">
                                <h5>Nama Pengirim</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" v-model="whatsapp_message_data.nama_pengirim">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Nama Penerima</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" v-model="whatsapp_message_data.nama_penerima">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Jam Kirim</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="time" v-model="whatsapp_message_data.jam_kirim">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Tanggal Kirim</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="date" v-model="whatsapp_message_data.tanggal_kirim">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="modal-form">
                                <h5>Alamat Asal</h5>
                                <textarea class="textarea" v-model="whatsapp_message_data.alamat_asal"></textarea>
                            </div>
                            <div class="modal-form">
                                <h5>Alamat Kirim</h5>
                                <textarea class="textarea" v-model="whatsapp_message_data.alamat_kirim"></textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success button-kirim" @click="sendWhatsappMessage()">
                        <span><img class="whatsapp-icon" :src="require('../../assets/whatsapp.svg')"></span>
                        <span>Kirim</span>
                    </button>
                    <button class="button" @click="send_message_whatsapp_modal_opened = false">Batal</button>
                </footer>
            </div>
        </div>
        <parallax class="parallax-container" :speedFactor="0.30">
            <img class="hero-parallax" :src="getImgUrl($store.state.hero_photo_kirim_paket)">
            <div class="hero-bg-color"></div>
            <div class="hero is-bold">
                <div class="hero-body">
                    <div class="hero-section has-text-centered">
                        <h1 class="title-hero">
                            Kirim Paket
                        </h1>
                    </div>
                    <div class="hero-section has-text-centered">
                        <h4 class="subtitle-hero">
                            Wilayah {{$store.state.wilayah_operasi_kerja_kirim_paket}}
                        </h4>
                    </div>
                </div>
            </div>
        </parallax>
        <section class="container packages-section">
            <h3 class="section-title has-text-centered">Jaminan Sampai dalam 24 Jam</h3>
            <div class="packages-subsection">
                <p>Kami melayani pengiriman paket {{$store.state.wilayah_operasi_kerja_kirim_paket}} pada rute di gambar berikut :</p>
                <img class="maps-route" :src="getImgUrl($store.state.foto_map_rute)">
            </div>
            <div class="packages-subsection">
                <h5>Dimensi Paket</h5>
                <div class="columns package-column">
                    <div class="card package-card" v-for="(item,index) in $store.state.dimensi_paket" :key="index">
                        <div class="card-image">
                            <img class="card-image-content" :src="getImgUrl(item.gambar)" alt="Placeholder image">
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="subtitle teks-dimensi">{{item.dimensi}}</p>
                                    <p class="title is-4">{{item.harga}}</p>
                                    <p class="subtitle is-6">{{item.keterangan}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container terms-contact-section">
            <div class="columns"> 
                <div class="column">
                    <h3 class="section-title">Ketentuan Pengiriman Paket</h3>
                    <div class="terms-point" v-for="(item,index) in $store.state.ketentuan_kirim_paket" :key="index">
                        <div class="terms-number">
                            <p>{{index+1}}. </p>
                        </div>
                        <div class="terms-content">
                            <p v-for="item2 in item" :key="item2.length">{{item2}}</p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <h3 class="section-title">Hubungi Kami</h3>
                    <p v-for="(item,index) in this.$store.state.info_kontak_kirim_paket" :key="index">{{item}}</p>
                    <div class="pesan-whatsapp-button" @click="send_message_whatsapp_modal_opened = true">
                        <img class="whatsapp-icon" :src="require('../../assets/whatsapp.svg')">
                        <h4 class="whatsapp-text-button">Kirim Paket via Whatsapp</h4>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
var moment = require('moment');
moment().format();

export default {
    data () {
        return {
            color_styling_hero : {
                background : 'linear-gradient(to right, ' + this.$store.state.primary_color_dark2 + ',' + this.$store.state.primary_color_dark + ')'
            },
            send_message_whatsapp_modal_opened : false,
            whatsapp_message_data : {
                nama_pengirim : '',
                nama_penerima : '',
                jam_kirim : '',
                tanggal_kirim : '',
                alamat_asal : '',
                alamat_kirim : ''
            }
        }
    },
    methods : {
        getImgUrl(pic) {
            return require('../../assets/' + pic)
        },
        sendWhatsappMessage() {
            var text = 
            "*Kirim Paket* : \r \n \r \n" +
            "Nama Pengirim : " + this.whatsapp_message_data.nama_pengirim + "\r \n" +
            "Nama Penerima : " + this.whatsapp_message_data.nama_penerima + "\r \n" +
            "Jam Kirim : " + this.whatsapp_message_data.jam_kirim + "\r \n" +
            "Tanggal Kirim : " + this.whatsapp_message_data.tanggal_kirim + "\r \n" +
            "Alamat Asal : " + this.whatsapp_message_data.alamat_asal + "\r \n" +
            "Alamat Kirim : " + this.whatsapp_message_data.alamat_kirim
            var text_to_send = window.encodeURIComponent(text)
            window.open('https://api.whatsapp.com/send?phone=' + this.$store.state.kontak_kirim_paket_whatsapp + '&text=' + text_to_send)
        }
    }
}
</script>

<style lang="sass" scoped>
@import ./kirim-paket.sass
</style>
