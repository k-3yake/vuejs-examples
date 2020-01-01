<template>
    <table>
        <tr>
            <th v-for="key of keys" @click="sort(key)" :class="{ active: currentSortKey == key}">
                {{ key }}
                <span class="arrow" :class="sorts.get(key) ? 'dsc' : 'asc' "></span>
            </th>
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
        @Prop({required:true}) entries!: Array<any>
        @Prop({required:true}) keys!: Array<string>
        @Prop({required:true}) filter!: FilterFunction
        private sorts: Map<string,Boolean> = new Map(this.keys.map( k => [k,true]))
        private currentSortKey: string = this.keys[0]

        @Watch("filter")
        public entriesFilter() {
            this.entries = this.entries.filter(this.filter)
        }

        public sort(key: string) {
            this.currentSortKey = key
            this.sorts.set(key,!this.sorts.get(key))

            this.entries = this.entries.sort( (n1 ,n2) => {
                const descNum = this.sorts.get(key) ? -1 : 1

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

    class Sort {
        private key: String
        private desc: Boolean = true;

        constructor(key: String) {
            this.key = key;
        }

        protected toggle(){
            this.desc = !this.desc
        }
    }


</script>

<style scoped>
    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
    }

    th {
        background-color: #42b983;
        color: rgba(255,255,255,0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    td {
        background-color: #f9f9f9;
    }

    th, td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
</style>
