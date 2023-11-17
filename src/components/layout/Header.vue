<template>
  <header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">

      <div class="navbar-header">
        <a class="visually-hidden" href="https://upc.edu">Inici</a>
        <a class="navbar-brand" href="https://upc.edu" aria-hidden="true">
          <!-- Logo icon -->
          <b aria-hidden="true">
            <img src="@/assets/logo-sjd.png" alt="homepage" class="dark-logo" />
          </b>
          <!-- Logo text -->
          <span id='navbar-brand-text' aria-hidden="true">
              <img src="@/assets/logo-letras.png" alt="homepage" class="dark-logo" />
          </span>
        </a>
      </div>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click='navToggle' class="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="javascript:void(0)">
              <span class="visually-hidden">"Hide"</span><i ref='navToggle' class="nav-toggler-i bi bi-list h3"></i>
            </a>
          </li>
          <li class="nav-item">
            <a @click='sideBarToggle' class="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark" href="javascript:void(0)">
              <span class="visually-hidden">"Show"</span><i class="nav-toggler-i bi bi-list h3 text-sjd-lila"></i>
            </a>
          </li>
        </ul>

        <h2 class="navbar-nav">
          <span class="difuminado">Carrera Profesional</span>
        </h2>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <router-link to="/about" class="nav-link">
              <span class="visually-hidden">Información</span>

              <i class="bi bi-info-circle-fill text-sjd-lila"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',

  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
  },

  computed: {
    perfil () {
      return {
        cn: 'nom.usuari',
        nom: 'nom usuari',
        email: 'nom.usuari@upc.edu'
      }
    }
  },

  methods: {
    /*changeLanguage(language) {
      localStorage.setItem("userLanguage", language)
      location.reload()
    },*/

    sideBarToggle () {
      // toggle en desktop
      document.body.classList.toggle('mini-sidebar')
    },

    navToggle (event) {
      // toggle en mobile
      document.body.classList.toggle('show-sidebar')
      event.target.classList.toggle('mdi-menu')
      event.target.classList.toggle('mdi-close')
    },

  },
}
</script>

<style scoped>

#navbar-brand-text {
  margin-left: 10px;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #ffc72c;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #FFFFFF, #FF0000, #942682, #ec6500);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #FFFFFF, #FF0000, #942682, #ec6500);
}

.navbar-header {
  border-bottom: 1px solid #eae9e9;
}
.navbar-collapse {
  border-bottom: 1px solid #eae9e9;
  /*background-color: #313131;*/
}

/*.navbar-expand-md .navbar-collapse {
  background: black;
}*/


.mini-sidebar #navbar-brand-text {
  display: none !important;
}

.mini-sidebar .sidebar-nav > ul > li {
  border: 1px solid transparent;
}

@media (min-width: 767px) {
  .mini-sidebar .sidebar-nav .el-menu > li:hover a {
    padding-bottom: 8px !important;
  }
}

.nav-item {
  cursor: pointer;
}

</style>
