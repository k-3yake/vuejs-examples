<template>
    <div>
        <input type="text" data-test="input-name" @keydown.enter="addTodo($event.target.value)"/>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {Todo} from "@/views/examples/todo-mvc/Todo";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";

@Component
export default class AddTodoRow extends Vue {
    @Prop({required:true})
    todoStorage!: TodoStorage

    addTodo(name: string) {
        this.todoStorage.save(new Todo(name))
    }
}
</script>

<style scoped>

</style>
