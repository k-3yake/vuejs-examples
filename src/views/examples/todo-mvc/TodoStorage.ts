import Todo from "@/views/examples/todo-mvc/Todo";
import FireBaseClient from "@/views/examples/todo-mvc/FireBaseClient";

export default class TodoStorage {
    private readonly _todoList: Array<Todo>
    private client = new FireBaseClient()

    constructor() {
        this._todoList = this.client.get()
    }

    get todoList(): Todo[] {
        return this._todoList
    }

    save(savedTodo: Todo) {
        this.client.set(savedTodo)
            .then(() => {
                const index = this._todoList.findIndex( (t) => t.name == savedTodo.name)
                if(index >= 0 ) {
                    this._todoList.splice(index,1,savedTodo)
                } else {
                    this._todoList.push(savedTodo)
                }
            })
            .catch((e) => alert(e))
    }

    remove(removedTodo: Todo) {
        this._todoList.forEach((todo, index) => {
            if(removedTodo.name == todo.name) this._todoList.splice(index,1)
        })
    }
}
