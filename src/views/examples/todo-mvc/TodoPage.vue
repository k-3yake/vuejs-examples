<template>
    <div>
        <add-todo-row @addTodo="addTodo"/>
        <todo-row v-for="(todo,index) in this.todoStorage.todoList"
                  :key="todo.name"
                  todo="todo"
                  @completed="completed"
                  @active="active"
                  :data-test="'todo-row-' + todo.name" />
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import AddTodoRow from "@/views/examples/todo-mvc/AooTodoRow.vue";
import Todo from "@/views/examples/todo-mvc/Todo";
import TodoRow from "@/views/examples/todo-mvc/TodoRow.vue";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";

@Component({
    components: { AddTodoRow, TodoRow }
})
export default class TodoPage extends Vue {
    private todoStorage = new TodoStorage();

    private addTodo(name:string) {
        this.todoStorage.add(new Todo(name))
    }

    private completed(todo:Todo) {
        todo.completed()
        this.todoStorage.save(todo)
    }

    private active(todo: Todo) {
        todo.active()
        this.todoStorage.save(todo)
    }
}


</script>

<style scoped>

</style>
