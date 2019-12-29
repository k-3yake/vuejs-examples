<template>
    <div>
        <div>
            <input type="button" v-on:click="changeFoo" value="changeFoo">
        </div>
        <div>
            <input type="button" v-on:click="changeFoo" value="changeBar">
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import BaseInput from "@/views/guide/16_components-edge-case/BaseInput.vue";
    @Component({
        components: {BaseInput}
    })
    export default class RootFooBarChange extends Vue{
        public boo:String = "boo"

        public changeFoo(){
            console.log(this.$root)
            this.$parent.$data.foo = 'changedFoo'
        }

        public changeBar(){
            this.$root.$data.bar = 'changedBar'
        }
    }
</script>