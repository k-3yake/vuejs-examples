<template>
    <div>
        <input data-test="todo-row-status" type="button" :value="todo.status" @click="toggleStatus"/>
        <span data-test="todo-row-name">{{ todo.name }}</span>
        <input data-test="todo-row-delete" type="button" value="X" @click="deleteTodo"/>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import Todo from "@/views/examples/todo-mvc/Todo";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";

@Component({})
export default class TodoRow extends Vue {
    @Prop({required: true})
    todo!: Todo

    @Prop({required: true})
    todoStorage!: TodoStorage

    toggleStatus(){
        this.todo.toggleStatus()
        this.todoStorage.save(this.todo)
    }

    deleteTodo(){
        this.todoStorage.remove(this.todo)
    }
}


</script>

<style scoped>

</style>
