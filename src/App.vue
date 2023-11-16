<template>

  <div id="main-wrapper" ref='mainWrapper' class="fix-header fix-sidebar card-no-border" >
    <Header ref='barraPrincipal'></Header>

    <div id="main-content">

      <MenuLeft v-if="itemsMenu" :items="itemsMenu" ref='menuNavegacio'></MenuLeft>

      <MainContent ref="main"></MainContent>

      <Footer ref='footer'></Footer>

    </div>
  </div>

</template>

<script>

import BaseFuncionalitat from "@/js/BaseFuncionalitat"
import Header from "@/components/layout/Header.vue";
import MenuLeft from "@/components/layout/MenuLeft.vue";
import Footer from "@/components/layout/Footer.vue";
import MainContent from "@/components/layout/MainContent.vue";

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
          to: '/home',
          icon: 'house',
          text: 'Inici'
        },
        {
          to: '/carrera/formacio',
          icon: 'envelope-paper',
          text: 'Carrera Formacio'
        },
        {
          to: '/carrera/docencia',
          icon: 'mortarboard',
          text: 'Carrera Docencia'
        },
        {
          to: '/carrera/recerca',
          icon: 'journals',
          text: 'Carrera Recerca'
        },
        {
          to: '/convocatories',
          icon: 'gear',
          text: 'Convocatories'
        },
        {
          tos: [
            {to: '/carrera/omplir3', text: 'Formació'},
          ],
          icon: 'gear',
          text: 'Administració'
        },
      ]
    }

  }
}


</script>

<style>

</style>
