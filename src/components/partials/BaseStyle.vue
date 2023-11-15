<template>
    <span></span>
</template>

<script>
    export default {
        name: "BaseStyle"
    }
</script>

<!--style lang="scss">@import "src/assets/styles/app.scss";</style-->
<style lang="css">@import "https://assets.upc.edu/upc-webapp-ui@0/assets/plugins/bootstrap/css/bootstrap.min.css";</style>
<style lang="css">@import "https://assets.upc.edu/upc-webapp-ui@0/main/css/style.css";</style>
<style lang="css">@import "https://assets.upc.edu/upc-webapp-ui@0/main/css/pages/timeline-vertical-horizontal.css";</style>

<style lang="scss">@import "src/styles/app";</style>

<style lang="scss">
    $font-stack:    Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;;
    $primary-color: #FFFFFF;


    .sidebar-nav .el-menu {
      background-color: #942682;
      border-right: unset;
    }

    .list-group li { background: whitesmoke; }
    .list-group li:nth-child(odd) { background: white; }

    .card-header {
        /*border-bottom: 5px solid #e2ab17 !important;*/
        /*border-bottom: 5px solid #5fa728 !important;*/
        border: 1px solid #dfdfdf !important;
        border-bottom: 2px solid #942682 !important;
    }

    .card-body {
        border: 1px solid #dfdfdf !important;
        border-top: 1px solid #dfdfdf !important;

    }

    .card-footer {
      border: 1px solid #dfdfdf !important;
      border-top: 2px solid #ec6500 !important;
        /*e2ab17*/
    }








</style>
