<template>
  <aside class="left-sidebar" id="menu">
    <div class="scroll-sidebar">
      <nav class="sidebar-nav">
          <el-menu
              :default-active="route"
              :router="false"
              :unique-opened="true"
              class=""
              mode="vertical"
              ref="el-menu-navegacio"
          >

            <template v-for="(item, key) in totalItems" >
              <el-sub-menu
                  :index="`${key}`"
                  :key="key"
                  :popper-class="'el-sub-menu-vertical'"
                  v-if="item.tos && (item.hasOwnProperty('visible')?item.visible:true) && (item.tos.some(i=>i.visible||!i.hasOwnProperty('visible')))"
              >
                <template #title>
                  <i class="bi" :class="`bi-${item.icon} me-2`" style='font-size:24px;'></i>
                  <span class="hide-menu">{{item.text}}</span>
                </template>
                <el-menu-item
                    v-for="(subitem, subkey) in item.tos.filter((i)=>i.hasOwnProperty('visible')?i.visible:true)"
                    :key="subkey"
                    :index="`${subitem.to}`">
                  <router-link
                      :exact="subitem.hasOwnProperty('exact')?subitem.exact:true"
                      :to="subitem.to"
                      class="waves-effect waves-dark"
                  >
                    <i class="bi" :class="`bi-${subitem.icon}`"></i>
                    <span class="hide-menu" >{{subitem.text}}</span>
                  </router-link>
                </el-menu-item>
              </el-sub-menu>

              <el-menu-item
                  :index="`${item.to}`"
                  :key="key"
                  @click="clickItem"
                  v-if="!item.tos && (item.hasOwnProperty('visible')?item.visible:true)"
              >
                <router-link
                    :exact="item.hasOwnProperty('exact')?item.exact:true"
                    :to="item.to"
                    aria-expanded="false"
                    class="waves-effect waves-dark"
                >
                  <i class="bi" :class="`bi-${item.icon}`"></i>
                  <span class="hide-menu" >{{item.text}}</span>
                </router-link>
              </el-menu-item>
            </template>
          </el-menu>
      </nav>
    </div>
  </aside>
</template>

<script>

export default {
  name: "MenuLeft",
  props: {
    // Llista dels elements
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    // Indica si cal tancar els submenús quan canvia la ruta
    closeSubMenusOnRouteChange: {
      type: Boolean,
      required: false,
      default: false,
    },
    // Indica si cal tancar els submenús quan cliqueu
    closeSubMenusOnClick: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return{
      lastModified: ""
    }
  },
  methods: {
    clickItem () {
      if (this.closeSubMenusOnClick) {
        this.closeSubMenus()
      }
    },
    closeSubMenus () {
      this.$refs['el-menu-navegacio'].openedMenus = []
    },

  },
  watch: {
    '$route' () {
      if (this.closeSubMenusOnRouteChange) {
        this.closeSubMenus()
      }
    }
  },
  computed: {
    route () {
      return this.$route?.path ?? ''
    },
    totalItems () {
      return [...this.items]
    },
  },
  mounted() {

  }
}
</script>



<style lang="scss" scoped>

.scroll-sidebar {
  overflow-y: auto;
}
:deep(.el-sub-menu) {
  .el-menu-item {

    height: unset;
    line-height: unset;

    & > a {
      padding-left: 5px;

    }
  }
}
.el-menu-item {
  & > a {
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    i {
      padding-right:10px;
    }
  }
}


.sidebar-nav > ul > li a.is-active, .sidebar-nav > ul > li a.active .mdi {
  background-color: #313131;
}

.sidebar-nav > ul > li.is-active, .sidebar-nav > ul > li.active > a, .sidebar-nav > ul > li:hover:not(.nav-small-cap), .sidebar-nav > ul > li:hover:not(.nav-small-cap) > a {
  background-color: #313131;
}

.sidebar-nav > ul > li.is-active a, .sidebar-nav > ul > li.active a .mdi, .sidebar-nav > ul > li:hover:not(.nav-small-cap) a, .sidebar-nav > ul > li:hover:not(.nav-small-cap) a .mdi {
  color: #fff;
}

.sidebar-nav > ul > li.is-active a, .sidebar-nav > ul > li.active a .mdi, .sidebar-nav > ul > li:hover:not(.nav-small-cap) a, .sidebar-nav > ul > li:hover:not(.nav-small-cap) a {
  color: #fff;
}

.sidebar-nav .el-menu-item.is-active i, .sidebar-nav .el-menu-item.is-active span, .sidebar-nav .el-menu-item:hover i, .sidebar-nav .el-menu-item:hover span, .sidebar-nav .el-menu-item.is-opened i, .sidebar-nav .el-menu-item.is-opened span, .sidebar-nav .el-sub-menu.is-active i, .sidebar-nav .el-sub-menu.is-active span, .sidebar-nav .el-sub-menu:hover i, .sidebar-nav .el-sub-menu:hover span, .sidebar-nav .el-sub-menu.is-opened i, .sidebar-nav .el-sub-menu.is-opened span {
  color: #fff;
  font-weight: 500;
}




</style>
