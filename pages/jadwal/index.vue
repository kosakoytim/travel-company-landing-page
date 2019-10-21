<template>
  <section>
    <Header/>
    <div class="content">
      <Jadwal/>
    </div>
    <Footer/>
  </section>
</template>

<script>
import Header from '~/components/_subcomponents/Header/Header.vue'
import Footer from '~/components/_subcomponents/Footer/Footer.vue'
import Jadwal from '~/components/Jadwal/Jadwal.vue'

export default {
  components: {
    Header, Footer, Jadwal
  },
  head () {
    return {
      title: 'Jadwal | Nusa Indah Travel'
    }
  },
}
</script>

<style lang="sass">
  @import '~/assets/css/global.sass'
</style>
