<template>
    <table>
        <tr>
            <th v-for="key of keys"> {{ key }}</th>
        </tr>
        <tr v-for="entry of entries">
            <td v-for="key of keys">{{ entry[key] }}</td>
        </tr>
    </table>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'

    type FilterFunction = (object: Object) => Boolean

    @Component
    export default class GridComponent extends Vue {
        @Prop({required:true}) entries!: Array<Object>
        @Prop({required:true}) keys!: Array<String>
        @Prop({required:true}) filter!: FilterFunction

        @Watch("filter")
        public entriesFilter() {
            this.entries = this.entries.filter(this.filter)
        }
    }

</script>

<style scoped>

</style>
