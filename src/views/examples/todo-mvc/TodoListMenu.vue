import {TodoStatus} from "@/views/examples/todo-mvc/Todo";
<template>
    <div>
        <span data-test="filter-remove" @click="filterRemove()">ALL</span>
        <span data-test="filter-complete" @click="filterComplete()">Complete</span>
        <span data-test="filter-active" @click="filterActive()">Active</span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
    import {TodoStatus} from '@/views/examples/todo-mvc/Todo';

    @Component
    export default class TodoListMenu extends Vue {
        @Prop({required:true})
        private todoStorage!: TodoStorage

        filterComplete() {
            this.todoStorage.filter(TodoStatus.COMPLETED)
        }

        filterActive() {
            this.todoStorage.filter(TodoStatus.ACTIVE)
        }

        filterRemove() {
            this.todoStorage.filterRemove()
        }
    }
</script>

<style scoped>

</style>
