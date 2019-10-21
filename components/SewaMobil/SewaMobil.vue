<template>
    <div>
        <div class="modal is-active" v-if="send_message_whatsapp_modal_opened">
            <div class="modal-background" @click="send_message_whatsapp_modal_opened = false"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Sewa Mobil</p>
                    <button class="delete" aria-label="close" @click="send_message_whatsapp_modal_opened = false"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column">
                            <div class="modal-form">
                                <h5>Nama</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" v-model="whatsapp_message_data.nama">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Mobil</h5>
                                <div class="select">
                                    <select v-model="whatsapp_message_data.mobil">
                                        <option :value="null">Pilih mobil</option>
                                        <option v-for="(item,index) in $store.state.mobil_travel_sewaan" :key="index" :value="item">{{item.nama}}</option>
                                    </select>
                                </div>
                                <!-- <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" v-model="whatsapp_message_data.mobil">
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="column">
                            <div class="modal-form">
                                <h5>Tanggal Awal</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="date" v-model="whatsapp_message_data.tanggal_awal">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Jam Ambil Mobil</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="time" v-model="whatsapp_message_data.jam_ambil_mobil">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Alamat Ambil Mobil</h5>
                                <textarea class="textarea" v-model="whatsapp_message_data.alamat_ambil_mobil"></textarea>
                            </div>
                        </div>
                        <div class="column">
                            <div class="modal-form">
                                <h5>Tanggal Selesai</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="date" v-model="whatsapp_message_data.tanggal_selesai">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Jam Pengembalian</h5>
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="time" v-model="whatsapp_message_data.jam_pengembalian">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-form">
                                <h5>Alamat Pengembalian</h5>
                                <textarea class="textarea" v-model="whatsapp_message_data.alamat_pengembalian"></textarea>
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
            
            <img class="hero-parallax" :src="getImgUrl($store.state.hero_photo_sewa_mobil)">
            <div class="hero-bg-color"></div>
            <div class="hero is-bold">
                <div class="hero-body">
                    <div class="hero-section has-text-centered">
                        <h1 class="title-hero">
                            Sewa Mobil
                        </h1>
                    </div>
                    <div class="hero-section has-text-centered">
                        <h4 class="subtitle-hero">
                            Wilayah {{$store.state.wilayah_operasi_kerja_sewa_mobil}}
                        </h4>
                    </div>
                </div>
            </div>
        </parallax>
        
        <section class="container cars-section">
            <h3 class="section-title has-text-centered">Tersedia {{$store.state.mobil_travel_sewaan.length}} Pilihan Mobil</h3>
            <div class="columns cars-column">
                <div class="card cars-card" v-for ="(item,index) in $store.state.mobil_travel_sewaan" :key="index">
                    <div class="card-image">
                        <!-- Style untuk gambar mobil sementara -->
                        <img style="padding-left: 1rem; padding-right: 1rem; padding-top: 1rem" :src="getImgUrl(item.gambar)" alt="Placeholder image">
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{item.nama}}</p>
                                <p class="subtitle is-6">{{item.keterangan}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container terms-contact-section">
            <div class="columns"> 
                <div class="column">
                    <h3 class="section-title">Ketentuan Sewa Mobil</h3>
                    <div class="terms-point" v-for="(item,index) in $store.state.ketentuan_sewa_mobil" :key="index">
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
                    <p v-for="(item,index) in $store.state.info_kontak_sewa_mobil" :key="index">{{item}}</p>
                    <div class="pesan-whatsapp-button" @click="send_message_whatsapp_modal_opened = true">
                        <img class="whatsapp-icon" :src="require('../../assets/whatsapp.svg')">
                        <h4 class="whatsapp-text-button">Pesan Mobil via Whatsapp</h4>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
var moment = require('moment');
moment().format();
import axios from 'axios'

export default {
    data () {
        return {
            color_styling_hero : {
                background : 'linear-gradient(to right, ' + this.$store.state.primary_color_dark2 + ',' + this.$store.state.primary_color_dark + ')'
            },
            send_message_whatsapp_modal_opened: false,
            whatsapp_message_data : {
                nama : '',
                jam_ambil_mobil : '',
                jam_pengembalian : '',
                tanggal_awal : '',
                tanggal_selesai : '',
                alamat_ambil_mobil : '',
                alamat_pengembalian : '',
                mobil : null
            }
        }
    },
    methods : {
        getImgUrl(pic) {
            return require('../../assets/' + pic)
        },
        sendWhatsappMessage() {
            var text = 
            "*Sewa Mobil* \r \n \r \n" +
            "Nama : " + this.whatsapp_message_data.nama + "\r \n" +
            "Mobil : " + this.whatsapp_message_data.mobil.nama + "\r \n" +
            "Tanggal Awal : " + this.whatsapp_message_data.tanggal_awal + "\r \n" +
            "Jam Ambil Mobil : " + this.whatsapp_message_data.jam_ambil_mobil + "\r \n" +
            "Alamat Ambil Mobil : " + this.whatsapp_message_data.alamat_ambil_mobil + "\r \n" +
            "Tanggal Selesai : " + this.whatsapp_message_data.tanggal_selesai + "\r \n" +
            "Jam Pengembalian : " + this.whatsapp_message_data.jam_pengembalian + "\r \n" +
            "Alamat Pengembalian : " + this.whatsapp_message_data.alamat_pengembalian
            
            var text_to_send = window.encodeURIComponent(text)
            window.open('https://api.whatsapp.com/send?phone=' + this.$store.state.kontak_sewa_mobil_whatsapp + '&text=' + text_to_send)
        }
    }
}
</script>

<style lang="sass" scoped>
@import ./sewa-mobil.sass
</style>
