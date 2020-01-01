<template>
    <ul>
        <TreeItemComponent :file="file()"></TreeItemComponent>
    </ul>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import TreeItemComponent,{ File } from "@/views/examples/tree/TreeItemComponent.vue";

    @Component({
        components: {TreeItemComponent}
    })
    export default class TreeViewApp extends Vue {

        public file():File {
            const a1 = new File("a-1")
            const a2 = new File("a-2")
            const a = new File("a",[a1,a2])
            const b = new File("b")
            return new File("root",[a,b])
        }
    }
</script>

<style scoped>
    body {

        font-family: Menlo, Consolas, monospace;
        color: #444;
    }
</style>
