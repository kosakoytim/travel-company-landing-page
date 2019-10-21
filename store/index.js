import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            // Data Travel
            nama_travel : 'Nusa Indah Trans',
            logo_travel_color : 'logo-travel/nusa-indah-travel.png',
            logo_travel_white : 'logo-travel/nusa-indah-travel-white.png',
            primary_color: '#08aa8f',
            secondary_color: '#08aa8f',
            primary_color_dark: '#057764',
            primary_color_dark2: '#035144',
            alamat_travel : [
                {
                    nama_kantor: 'Kantor Bengkulu',
                    alamat_kantor: 'Jalan MT Haryono No. 2 Penantungan, Kota Bengkulu'
                },
                {
                    nama_kantor: 'Kantor Palembang',
                    alamat_kantor: 'Jalan Radial Rumah Susun Blok 48 (Arah Pasar 26 Ilir)'
                }
            ],
            kontak_travel : [
                'Bengkulu - 0813 8000 7240',
                'Palembang - 0813 8000 725',
            ],
            media_sosial_travel : {
                facebook_link: 'https://www.facebook.com/nusaindahtrans/',
                instagram_link: 'https://www.instagram.com/nusa_indah_trans/',
            },
            // Halaman Home
            hero_title: 'Travel Terbaik',
            hero_subtitle: 'di Bengkulu - Palembang',
            hero_photos: [
                'photo-nusa-indah-travel/photo1.jpeg',
                'photo-nusa-indah-travel/photo2.jpeg',
                'photo-nusa-indah-travel/photo3.jpeg',
                'photo-nusa-indah-travel/photo4.jpeg'
            ],
            more_travel_photos: [
                'photo-nusa-indah-travel/photo5.jpeg',
                'photo-nusa-indah-travel/photo6.jpeg',
                'photo-nusa-indah-travel/photo7.jpeg',
                'photo-nusa-indah-travel/photo8.jpeg',
                'photo-nusa-indah-travel/photo10.jpeg',
                'photo-nusa-indah-travel/photo11.jpeg',
                'photo-nusa-indah-travel/photo12.jpeg',
                'photo-nusa-indah-travel/photo13.jpeg',
                'photo-nusa-indah-travel/photo14.jpeg'
            ],
            rute_tersedia : [
                {
                    judul: 'Bengkulu - Palembang (Via Sekayu)',
                    titik_awal : 'Bengkulu',
                    titik_tengah : [
                        'Curup/Kepahiang',
                        'Lubuk Linggau',
                        'Sekayu',
                        'Betung (Pang. Balai)'
                    ],
                    titik_akhir : 'Palembang'
                },
                {
                    judul: 'Bengkulu - Palembang (Via Lahat)',
                    titik_awal : 'Bengkulu',
                    titik_tengah : [
                        'Lahat',
                        'Muara Enim',
                        'Prabumulih'
                    ],
                    titik_akhir : 'Palembang'
                }
            ],
            // Halaman Jadwal
            hero_photo_jadwal : 'photo-nusa-indah-travel/photo7.jpeg',
            jadwal_tersedia : [
                {
                    judul : 'Bengkulu - Palembang (via Sekayu)',
                    rute : [
                        {
                            nama_rute : 'Bengkulu - Kepahian',
                            harga_tiket: 'Rp50.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Lubuk Linggau',
                            harga_tiket: 'Rp100.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Sekayu',
                            harga_tiket: 'Rp180.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Betung (Pangkalan Balai)',
                            harga_tiket: 'Rp200.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Palembang',
                            harga_tiket: 'Rp220.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        }
                    ],
                    footnote: 'Berlaku juga untuk rute Palembang - Bengkulu'
                },
                {
                    judul : 'Bengkulu - Palembang (via Lahat)',
                    rute : [
                        {
                            nama_rute : 'Bengkulu - Lahat',
                            harga_tiket: 'Rp100.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Muara Enim',
                            harga_tiket: 'Rp180.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Prabumulih',
                            harga_tiket: 'Rp200.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        },
                        {
                            nama_rute : 'Bengkulu - Palembang',
                            harga_tiket: 'Rp220.000',
                            jam_berangkat: '10.00 dan 20.00 (dari Bengkulu)'
                        }
                    ],
                    footnote: 'Berlaku juga untuk rute Palembang - Bengkulu'
                }
            ],
            // Halaman Tentang
            hero_photo_tentang : 'photo-nusa-indah-travel/halaman_tentang.jpg',
            visi_travel : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet est porta dignissim facilisis. Maecenas mattis lobortis tellus in facilisis. Aliquam ut lacinia diam',
            fokus_travel : [
                {
                    note : 'Armada Terbaik',
                    icon : 'school-bus.svg'
                },
                {
                    note : 'Kenyamanan Penumpang',
                    icon : 'like.svg'
                },
                {
                    note : 'Keselamatan Penumpang',
                    icon : 'shield.svg'
                }
            ],
            // Halaman Sewa Mobil
            hero_photo_sewa_mobil : 'photo-nusa-indah-travel/halaman_sewa_mobil.jpg',
            wilayah_operasi_kerja_sewa_mobil : 'Bengkulu dan Palembang',
            mobil_travel_sewaan : [
                { nama : 'Toyota Avanza', keterangan : 'Rp400rb/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/toyota-avanza.png' },
                { nama : 'Toyota Innova', keterangan : 'Rp450rb/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/toyota-innova.png'},
                { nama : 'New Toyota Innova', keterangan : 'Rp500rb/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/new-toyota-innova.png'},
                { nama : 'Toyota Fortuner', keterangan : 'Rp550rb/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/fortuner.png' },
                { nama : 'Mitsubishi Pajero', keterangan : 'Rp600rb/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/toyota-pajero.png' },
                { nama : 'Toyota Alphard', keterangan : 'Rp800rb/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/toyota-alphard.png' },
                { nama : 'Toyota Hiace', keterangan : 'Rp1,1jt/24 jam', gambar : 'photo-nusa-indah-travel/mobil-sewa/toyota-hiace.png' }
            ],
            ketentuan_sewa_mobil : [
                [
                    'Batas wilayah penggunaan mobil:', '- Wilayah Bengkulu : Curup, Lubuk Linggau', '- Wilayah Palembang : Palembang, Ampera'
                ], 
                [ 'Akan dikenakan biaya tambahan apabila menggunakan mobil di luar batas daerah' ],
                [ 'Apabila terjadi keterlambatan pengembalian dikenakan biaya 10% harga sewa untuk setiap jam keterlambatan' ],
                [ 'Harga diatas tidak termasuk supir dan bensin' ]
            ],
            info_kontak_sewa_mobil : [
                '0813 8000 7240 (Bengkulu) - Telepon, SMS, Whatsapp',
                '0813 8000 725 (Palembang) - Telepon, SMS, Whatsapp'
            ],
            kontak_sewa_mobil_whatsapp : '6281380007240',
            // Halaman Kirim Paket
            hero_photo_kirim_paket : 'photo-nusa-indah-travel/halaman_kirim_paket.jpg',
            wilayah_operasi_kerja_kirim_paket : 'Bengkulu dan Palembang',
            foto_map_rute : 'photo-nusa-indah-travel/rute-paket.jpg',
            dimensi_paket : [
                { dimensi : '50 cm x 50 cm (dokumen)', harga : 'Rp80.000', keterangan : '(dari manapun ke manapun)', gambar : 'photo-nusa-indah-travel/paket/paket50cm.jpg'},
                { dimensi : '> 50 cm', harga : 'Rp220.000/kursi digunakan', keterangan : '(dari manapun ke manapun)', gambar : 'photo-nusa-indah-travel/paket/paket>50cm.jpg'}
            ],
            ketentuan_kirim_paket : [
                ['Hanya melayani pengiriman paket dari dan menuju wilayah sekitar Bengkulu, Curup Kepahiang, Lubuk Linggau, Sekayu dan Bengkulu'],
                ['Tidak diperbolehkan mengirim barang berbahaya atau berbau tajam, seperti obat obat terlarang, mesin, senjata tajam, buah durian dll'],
                ['Apabila mengirim barang yang mudah pecah belah, gunakan pelindung sterofoam, kardus, dan lainnya. Pihak Nusa Indah tidak mengganti barang yang rusak akibat kesalahan pengemasan'],
                ['Barang yang hilang dalam perjalanan akan diganti oleh pihak Nusa Indah'],
                ['Barang harus diambil maksimal 2 x 24 jam setelah barang tiba di tujuan. Melewati batas itu, mohon dikoordinasikan dan pihak Nusa Indah tidak menanggung penggantian barang apabila terhilang'],
                ['Pengirim dan penerima barang menyatakan sudah membaca dan menyetujui ketentuan ini sebelum melakukan pengiriman barang menggunakan layanan Nusa Indah']
            ],
            info_kontak_kirim_paket : [
                '0813 8000 7240 (Bengkulu) - Telepon, SMS, Whatsapp',
                '0813 8000 725 (Palembang) - Telepon, SMS, Whatsapp'
            ],
            kontak_kirim_paket_whatsapp : '6281380007240',
        },
    })
}

export default createStore