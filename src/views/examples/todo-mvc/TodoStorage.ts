import Todo from "@/views/examples/todo-mvc/Todo";
import FireBaseClient from "@/views/examples/todo-mvc/FireBaseClient";

export default class TodoStorage {
    private readonly todoList: Array<Todo>
    private client = new FireBaseClient()

    constructor() {
        console.log("init storage")
        this.todoList = this.client.get()
    }

    getTodoList(): Array<Todo> {
        console.log("get storage")
        return this.todoList
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
            })
            .catch((e) => alert(e))
    }

    remove(removedTodo: Todo) {
        this.client.remove(removedTodo).then( () => {
            this.todoList.forEach((todo, index) => {
                if(removedTodo.name == todo.name) this.todoList.splice(index,1)
            })
        }).catch((e) => alert(e))
    }
}
