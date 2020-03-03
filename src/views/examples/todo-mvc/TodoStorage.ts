import {Todo,TodoStatus} from "@/views/examples/todo-mvc/Todo";
import FireBaseClient from "@/views/examples/todo-mvc/FireBaseClient";
import functions from "firebase";

export default class TodoStorage {
    private todoList: Array<Todo>
    private client = new FireBaseClient()
    private _filter:Filter = function (todo: Todo) { return true }

    constructor() {
        this.todoList = this.client.get();
    }

    fetch() {
        this.todoList = this.client.get();
    }

    getTodoList(): Array<Todo> {
        return this.todoList.filter(this._filter)
    }

    save(savedTodo: Todo) {
        this.client.set(savedTodo)
            .then(() => {
                const index = this.todoList.findIndex( (t) => t.name == savedTodo.name)
                if(index >= 0 ) {
                    this.todoList.splice(index,1,savedTodo)
                } else {
                    this.todoList.push(savedTodo)
                }
            }).catch((e) => alert(e))
    }

    remove(removedTodo: Todo) {
        this.client.remove(removedTodo).then( () => {
            this.todoList.forEach((todo, index) => {
                if(removedTodo.name == todo.name) this.todoList.splice(index,1)
            })
        }).catch((e) => alert(e))
    }

    filter(todoStatus: TodoStatus) {
        this._filter = function(todo:Todo) { return todo.statusVal == todoStatus}
    }

    filterRemove() {
        this._filter = function(todo:Todo) { return true}
    }
}

interface Filter {
    (todo:Todo) : Boolean
}
