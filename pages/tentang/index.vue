<template>
  <section>
    <Header/>
    <div class="content">
      <Tentang/>
    </div>
    <Footer/>
  </section>
</template>

<script>
import Header from '~/components/_subcomponents/Header/Header.vue'
import Footer from '~/components/_subcomponents/Footer/Footer.vue'
import Tentang from '~/components/Tentang/Tentang.vue'

export default {
  components: {
    Header, Footer, Tentang
  },
  head () {
    return {
      title: 'Tentang | Nusa Indah Travel'
    }
  },
}
</script>

<style lang="sass">
  @import '~/assets/css/global.sass'
</style>
