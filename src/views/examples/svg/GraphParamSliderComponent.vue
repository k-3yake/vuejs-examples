<template>
    <div>
        <div v-for="key in params.keys()">
            <span>{{key}}</span>
            <input type="range" :value="params.value(key)" @change="changeParamValue($event, key)" min="0" max="100">
            <span>{{params.value(key)}}</span>
            <button @click="deleteParam(key)">X</button>
        </div>
        <input name="newlabel" v-model="newLabel">
        <button @click="add">Add a Stat</button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
    import {Params} from "@/views/examples/svg/SvgGraphApp.vue";

    @Component
    export default class GraphParamSliderComponent extends Vue {
        @Prop({ required: true}) params!: Params
        private newLabel: String = ""

        add() {
            this.params.add(this.newLabel)
        }

        changeParamValue(event: Event, key: String){
            if (event.target instanceof HTMLInputElement) {
                this.params.changeValue(key, new Number(event.target.value))
            }
        }

        deleteParam(key: String) {
            this.params.delete(key)
        }
    }


</script>

<style scoped>

</style>
