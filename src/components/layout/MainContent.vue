<template>
    <div class="page-wrapper fill" id="app">
        <!--keep-alive-->
          <router-view :key="$route"/>
        <!--/keep-alive-->
    </div>
</template>

<script>

    export default {
        name: 'MainContent',
        props: {

        },
    }
</script>

<style scoped>

.page-wrapper {
  padding-top: 0px;
  height: 100%;
  padding-bottom: 0px;
  display: flex;
  background: white;
  position: relative;
}
.fill {
  min-height: 100%;
  height: 100%;
}

</style>
