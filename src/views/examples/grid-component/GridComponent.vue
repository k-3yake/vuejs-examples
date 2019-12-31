<template>
    <table>
        <tr>
            <th v-for="key of keys" @click="sort(key)"> {{ key }}</th>
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
        private sortKey: String = this.keys[0]
        private desc: Boolean

        const propertiesOf = <TObj>(_obj: (TObj | undefined) = undefined) => <T extends keyof TObj>(name: T): T => name;

        @Watch("filter")
        public entriesFilter() {
            this.entries = this.entries.filter(this.filter)
        }

        public sort(key: String) {
            if(this.sortKey == key) {
                this.desc = !this.desc
            } else {
                this.desc = true
            }
            this.sortKey = key

            console.log(key)
            this.entries = this.entries.sort( (n1 ,n2) => {
                const descNum = this.desc ? -1 : 1

                if (n1[key] > n2[key]) {
                    return 1 * descNum;
                }

                if (n1[key] < n2[key]) {
                    return -1 * descNum;
                }

                return 0;
            } )
            console.log(this.entries)
        }
    }

</script>

<style scoped>

</style>
