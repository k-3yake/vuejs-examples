<template>
    <li>
        <div :class="{bold: hasChild(), hasChildItem: hasChild()}">
            {{ file.name }}
            <span v-show="hasChild()" @click="toggleOpen()">{{ isOpen ? "[-]" : "[+]" }}</span>
        </div>
        <ul v-show="isOpen">
            <template v-for="child of file.children">
                <TreeItemComponent :file="child"></TreeItemComponent>
            </template>
        </ul>
    </li>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component
    export default class TreeItemComponent extends Vue {
        @Prop({ required:true} ) private file!: File
        isOpen:Boolean = false

        toggleOpen(){
            this.isOpen = !this.isOpen
        }

        hasChild():Boolean {
            return this.file.children.length > 0
        }

    }

    export class File {
        name: String;
        children: Array<File>;

        constructor(name: string, children: Array<File> = []) {
            this.name = name;
            this.children = children;
        }
    }
</script>

<style scoped>
    .hasChildItem {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
    div {
        text-align: left;
    }
</style>
