<template>
    <div>
        <div>{{ foo }}</div>
        <div>{{ bar }}</div>
        <div>
            <root-foo-bar-change ref="fooBarChange"></root-foo-bar-change>
        </div>
        <div>
            <input type="button" v-on:click="boo" value="">
        </div>
        <div>
            <base-input ref="baseInput"></base-input>
            <input type="button" value="focusBaseInput!" v-on:click="focusBaseInput">
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import RootFooBarChange from './RootFooBarChange.vue'
    import BaseInput from './BaseInput.vue'

    @Component({
        components: {
            RootFooBarChange,
            BaseInput
        }
    })
    export default class EdgeCaseApp extends Vue {
        public foo: String = 'foo';
        public bar: String = 'bar';

        public boo(): String{
            var fooBarChange = this.$refs["fooBarChange"] as RootFooBarChange
            return fooBarChange.$data.boo
        }

        private refs():any{
            return this.$refs
        }

        public focusBaseInput() {
            this.refs().baseInput.focus1()
        }
    }
</script>