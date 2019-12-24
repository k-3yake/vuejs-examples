<template>
    <input type="text" placeholder="baseInput" ref="input">
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    @Component
    export default class BaseInput extends Vue {

        private refs():any {
            return this.refs
        }

        public focus1(){
            this.refs().input.focus()
        }
    }
</script>
