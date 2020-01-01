<template>
    <div>
        <div v-for="key in params.keys()">
            <div>{{key}}, {{params.value(key)}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import {Params} from "@/views/examples/svg/SvgGraphApp.vue";

    @Component
    export default class GraphParamListComponent extends Vue {
        @Prop({ required: true}) params!: Params
    }
</script>

<style scoped>

</style>
