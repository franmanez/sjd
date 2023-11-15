export default {
    mounted () {
        document.title = this.titolApp
        window.onload = this.resize
        window.onresize = this.resize
    },

    methods: {
        resize () {
            let width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width
            if (width < 1170) {
                document.body.classList.add("mini-sidebar")
                this.$refs.barraPrincipal.$refs.navToggle?.classList.add('mdi-menu')
            } else {
                document.body.classList.remove("mini-sidebar")
            }

            let topOffset = 140
            let height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1
            height = height - topOffset
            if (height > topOffset) {
                document.getElementById('main-wrapper').setAttribute('style', `min-height: ${height}px`)
            }
        }, // end resize
    },
}
