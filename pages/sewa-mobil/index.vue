<template>
  <section>
    <Header/>
    <div class="content">
      <SewaMobil/>
    </div>
    <Footer/>
  </section>
</template>

<script>
import Header from '~/components/_subcomponents/Header/Header.vue'
import Footer from '~/components/_subcomponents/Footer/Footer.vue'
import SewaMobil from '~/components/SewaMobil/SewaMobil.vue'

export default {
  components: {
    Header, Footer, SewaMobil
  },
  head () {
    return {
      title: 'Sewa Mobil | Nusa Indah Travel'
    }
  },
}
</script>

<style lang="sass">
@import '~/assets/css/global.sass'

.parallax-window 
	min-height: 400px
	background: transparent

</style>
