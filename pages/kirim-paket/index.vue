<template>
  <section>
    <Header/>
    <div class="content">
      <KirimPaket/>
    </div>
    <Footer/>
  </section>
</template>

<script>
import Header from '~/components/_subcomponents/Header/Header.vue'
import Footer from '~/components/_subcomponents/Footer/Footer.vue'
import KirimPaket from '~/components/KirimPaket/KirimPaket.vue'

export default {
  components: {
    Header, Footer, KirimPaket
  },
  head () {
    return {
      title: 'Kirim Paket | Nusa Indah Travel'
    }
  },
}
</script>

<style lang="sass">
  @import '~/assets/css/global.sass'
</style>
