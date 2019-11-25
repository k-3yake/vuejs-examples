export class TodoItem {
    public id:Number;
    public text:String;
    public isComplete: Boolean = true;

    constructor(id: Number, text: String) {
        this.id = id;
        this.text = text;
    }
}