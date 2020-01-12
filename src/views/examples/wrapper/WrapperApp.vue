<template>
    <div>
        <Select2WrapperComponent :options="options" v-model="selected">
            <option disabled value="0">Select one</option>
        </Select2WrapperComponent>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import {DataFormat} from "select2";
    import Select2WrapperComponent from "@/views/examples/wrapper/WrapperComponent.vue";

    @Component({
        components: { Select2WrapperComponent }
    })
    export default class WrapperApp extends Vue {
        options : Array<DataFormat> = [ {id:1, text:"aaaa"}, {id:2, text:"bbb"}, {id:3, text:"ccc"}, {id:4, text:"abc"}]
        selected: Number = 2
    }
</script>

<style scoped>

</style>
