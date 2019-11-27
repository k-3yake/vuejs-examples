<template>
    <div>
        <div>
            <h3>keep-aliveの例</h3>
            <keep-alive>
                <component v-bind:is="componetName"></component>
            </keep-alive>
            <input type="button" value="comp1" v-on:click="changeComp1">
            <input type="button" value="comp2" v-on:click="changeComp2">
        </div>
        <div>
            <h3>非同期コンポーネントの例</h3>
              <async-example></async-example>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import  InputComponent1 from './InputComponent1.vue'
    import  InputComponent2 from './InputComponent2.vue'
    import  AsyncComponent from './AsyncComponent.js'

    @Component({
        components: {
            InputComponent1,
            InputComponent2,
            AsyncComponent
        }
    })
    export default class AppDynamicAsync extends Vue {
        componetName: String = 'InputComponent1'

        changeComp1() {
            this.componetName = 'InputComponent1'
        }
        changeComp2() {
            this.componetName = 'InputComponent2'
        }

    }
</script>