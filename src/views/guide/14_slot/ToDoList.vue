<template>
    <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">
            <slot name="todo" v-bind:todo="todo">
                {{ todo.text }}
            </slot>
        </li>
    </ul>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import { TodoItem } from '@/views/guide/14_slot/TodoItem'

    @Component
    export default class TodoList extends Vue {
        @Prop() private todos:Array<TodoItem> = []
    }
</script>

<style scoped>

</style>