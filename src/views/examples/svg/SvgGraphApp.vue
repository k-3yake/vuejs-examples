<template>
    <div>
        <PolygraphComponent :params="params"></PolygraphComponent>
        <GraphParamSliderComponent :params="params"></GraphParamSliderComponent>
        <GraphParamListComponent :params="params"></GraphParamListComponent>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import GraphParamSliderComponent from "@/views/examples/svg/GraphParamSliderComponent.vue";
    import GraphParamListComponent from "@/views/examples/svg/GraphParamListComponent.vue";
    import PolygraphComponent from "@/views/examples/svg/PolygraphComponent.vue";

    @Component({
        components: {
            GraphParamSliderComponent, GraphParamListComponent, PolygraphComponent
        }
    })
    export default class SvgGraphApp extends Vue {
        private params: Params = new Params();

        public created() {
            this.params.add("a")
            this.params.add("b")
            this.params.add("c")
        }
    }

    export class Params {
        private _params: Map<String, Number> = new Map()
        private _keys: Array<String> = []

        keys(): ReadonlyArray<String> {
            return this._keys
        }

        value(key: String):Number {
            return <Number>this._params.get(key)
        }

        add(key: String){
            this._keys.push(key)
            this._params.set(key,100)
            this.refresh();
        }

        delete(key: String) {
            const index = this._keys.indexOf(key)
            this._keys.splice(index,1);
            this._params.delete(key)
            this.refresh()
        }

        changeValue(key: String, value: Number) {
            this._params.set(key, value)
            this.refresh()
        }

        private refresh() {
            this._keys = Array.from(this._keys)
            this._params = new Map(this._params)
        }
    }


</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
    }
</style>
