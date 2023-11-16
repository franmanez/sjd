<template>

    <footer class="footer" style="background-color: white">
        <p class="m-b-0">
          <span class="small">© 2023 Hospital Sant Joan de Déu Barcelona </span>
        </p>
        <nav class="m-b-0">
          <a :href="`mailto:davinialopez@gmail.com`" class="small link-secondary" >
            Contacto
          </a>
        </nav>
    </footer>
</template>

<script>

export default {
    //eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
}
</script>
<style scoped lang="scss">
@media(min-width: 767px) {
    .footer {
        z-index: 30;
        position: fixed;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}
</style>
