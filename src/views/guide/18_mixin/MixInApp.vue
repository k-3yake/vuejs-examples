<template>
    <button @click="message()">check console!</button>

</template>

<script lang="ts">
    import {Vue, Prop} from 'vue-property-decorator'
    import { Component, Mixin, Mixins } from "vue-mixin-decorator"

    @Mixin
    class Hoge extends Vue {
        hogeMessage() { console.log("I'm CommitsApp.") }
    }

    @Mixin
    class Fuga extends Vue {
        fugaMessage() { console.log("I'm Fuga.") }
    }

    interface HogeFuga extends Hoge,Fuga {  }

    @Component
    export default class MixInApp extends Mixins<HogeFuga>(Hoge, Fuga) {
        message() {
            console.log("I'm MixInApp.");
            this.hogeMessage();
            this.fugaMessage();
        }
    }
</script>

<style scoped>

</style>
