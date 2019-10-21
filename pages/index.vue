<template>
  <section>
    <Header/>
    <div class="content">
      <Home/>
    </div>
    <Footer/>
  </section>
</template>

<script>
import Header from '~/components/_subcomponents/Header/Header.vue'
import Footer from '~/components/_subcomponents/Footer/Footer.vue'
import Home from '~/components/Home/Home.vue'

export default {
  components: {
    Header, Footer, Home
  },
  head () {
    return {
      title: 'Nusa Indah Travel | Travel Palembang Bengkulu'
    }
  },
}
</script>

<style lang="sass">
  @import '~/assets/css/global.sass'
</style>
