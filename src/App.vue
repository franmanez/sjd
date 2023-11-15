<template>



  <div id="main-wrapper" ref='mainWrapper' class="fix-header fix-sidebar card-no-border" >
    <Header
        titol="titolApp"
        ref='barraPrincipal'
    ></Header>

    <div id="main-content">

      <MenuLeft v-if="itemsMenu"
                :items="itemsMenu"
                ref='menuNavegacio'>
      </MenuLeft>

      <MainContent ref="main"></MainContent>

      <Footer ref='footer'></Footer>

    </div>


  </div>


</template>

<script>

import BaseFuncionalitat from "@/js/BaseFuncionalitat"
import Header from "@/components/partials/Header.vue";
import MenuLeft from "@/components/partials/MenuLeft.vue";
import Footer from "@/components/partials/Footer.vue";
import MainContent from "@/components/partials/MainContent.vue";

export default {
  name: 'App',
  extends: BaseFuncionalitat,
  components: {
    MainContent,
    Footer,
    MenuLeft,
    Header,
  },

  setup() {

  },

  computed: {
    itemsMenu() {
      return [

        {
          to: '/doi',
          icon: 'home',
          text: 'Inici'
        },
        {
          to: '/prefix/info',
          icon: 'format-list-bulleted',
          text:'Omplir carrera'
        },

        /*{
          tos: [
            {to: '/about', text: this.$t('About')},
          ],
          icon: 'format-list-bulleted',
          text: this.$t('Pàgines')
        },*/
      ]
    }

  }
}


</script>

<style>

</style>
