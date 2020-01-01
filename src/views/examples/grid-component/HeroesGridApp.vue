<!--
初期表示
ソート
フィルター
-->

<template>
    <div>
        <input type="text" v-model:value="filterKeyword" >
        <GridComponent :entries="heroes" :keys="heroParamNames" :filter="filter()"></GridComponent>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
    import GridComponent from "@/views/examples/grid-component/GridComponent.vue";

    @Component({
        components: { GridComponent }
    })
    export default class HeroesGridApp extends Vue {
        private heroes: Array<Hero> = [ new Hero("rider man", 200), new Hero("x", 300), new Hero("v3", 400) ]
        private heroParamNames: Array<string> = ["name", "power"]
        private filterKeyword = ""

        @Watch("filterKeyword")
        private filter() {
            if(this.filterKeyword && this.filterKeyword.length > 0) {
                return (hero: Hero) =>  { return hero.containts(this.filterKeyword) }
            } else {
                return () =>  { return true }
            }
        }
    }

    class Hero {
        name: String;
        private power: Number;

        constructor(name: String, power: Number) {
            this.name = name;
            this.power = power;
        }

        public containts(keyword: String): Boolean {
            return (this.containtsBase(this.name, keyword) || this.containtsBase(this.power.toString(), keyword))
        }

        private containtsBase(target:String, keyword: String): Boolean {
            return target.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0
        }
    }
</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }
</style>
