<template>
    <div>
        <add-todo-row :todoStorage="todoStorage"/>
        <todo-row v-for="(todo,index) in todoList"
                  :key="todo.name"
                  :todoStorage="todoStorage"
                  :todo="todo"
                  :data-test="'todo-row-' + todo.name" />
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import AddTodoRow from "@/views/examples/todo-mvc/AddTodoRow.vue";
import TodoRow from "@/views/examples/todo-mvc/TodoRow.vue";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";

@Component({
    components: { AddTodoRow, TodoRow }
})
export default class TodoPage extends Vue {
    todoStorage = new TodoStorage();
    todoList = this.todoStorage.getTodoList()


}

</script>

<style scoped>

</style>
