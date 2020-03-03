class Todo {
    private readonly _name: string
    private todoStatus: TodoStatus

    constructor(name: string, todoStatus: TodoStatus = TodoStatus.ACTIVE) {
        this._name = name;
        this.todoStatus = todoStatus
    }

    //todo リファクタ。文字変更は画面で
    get status(): string {
        switch (this.todoStatus) {
            case TodoStatus.ACTIVE:
                return "Active"
            case TodoStatus.COMPLETED:
                return "Completed"
            default:
                return ""
        }
    }

    get statusVal(): TodoStatus {
        return this.todoStatus
    }
    get name(): string {
        return this._name;
    }

    toggleStatus() {
        if(this.todoStatus == TodoStatus.ACTIVE) {
            this.todoStatus = TodoStatus.COMPLETED
        }else {
            this.todoStatus = TodoStatus.ACTIVE
        }
    }
}

enum TodoStatus {
    ACTIVE,
    COMPLETED
}

export  {
    Todo,
    TodoStatus
}
