<template>
    <div>
        <add-todo-row :todoStorage="todoStorage"/>
        <todo-row v-for="(todo,index) in todoList"
                  :key="todo.name"
                  :todoStorage="todoStorage"
                  :todo="todo"
                  :data-test="'todo-row-' + todo.name" />
        <todo-list-menu :todoStorage="todoStorage"/>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import AddTodoRow from "@/views/examples/todo-mvc/AddTodoRow.vue";
import TodoRow from "@/views/examples/todo-mvc/TodoRow.vue";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import TodoListMenu from "@/views/examples/todo-mvc/TodoListMenu.vue";

@Component({
    components: { AddTodoRow, TodoRow, TodoListMenu }
})
export default class TodoPage extends Vue {
    todoStorage = new TodoStorage();

    get todoList() {
        return this.todoStorage.getTodoList()
    }

}

</script>

<style scoped>

</style>
