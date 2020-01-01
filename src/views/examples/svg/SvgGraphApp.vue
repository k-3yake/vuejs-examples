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

        public add(label: String){
            this._params.set(label,100)
            this._params = new Map(this._params)
        }

        getAll(): ReadonlyMap<String, Number> {
            return this._params;
        }

        delete(key: String) {
            this._params.delete(key)
            this._params = new Map(this._params)
        }

        changeValue(key: String, value: Number) {
            this._params.set(key, value)
            this._params = new Map(this._params)
        }
    }


</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
    }
</style>
