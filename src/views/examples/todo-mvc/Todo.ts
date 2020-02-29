export default class Todo {
    private readonly _name: string
    private isActive: Boolean

    constructor(name: string, isActive = true) {
        this._name = name;
        this.isActive = isActive;
    }

    get status(): string {
        if(this.isActive) return "Active"
        return "Completed"
    }

    get name(): string {
        return this._name;
    }

    toggleStatus() {
        this.isActive = !this.isActive
    }
}
