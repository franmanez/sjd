<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link :to="{ name: 'carrera-formacio' }" class="nav-link rounded-0" :class="{ 'active': $route.path === '/carrera/formacio' }">Formació Acadèmica</router-link>
      </li>
      <li class="nav-item rounded-0">
        <router-link :to="{ name: 'carrera-docencia' }" class="nav-link rounded-0" :class="{ 'active': $route.path === '/carrera/docencia' }">Docencia</router-link>
      </li>
      <li class="nav-item rounded-0">
        <router-link :to="{ name: 'carrera-recerca' }" class="nav-link rounded-0" :class="{ 'active': $route.path === '/carrera/recerca' }">Recerca</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
      name: "MenuFormacio",
      components: {
      },
      props: {
      },
      setup() {
      },

}

</script>


<style scoped>

  .nav-pills .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    background-color: #ea6212;
    color:white;
  }

  .nav-pills .nav-link, .nav-tabs .nav-item.show .nav-link {
    background-color: #a4a2a2;
    margin-left: 1px;
    color:white;
  }


</style>

