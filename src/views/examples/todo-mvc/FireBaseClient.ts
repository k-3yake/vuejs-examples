import {User} from "@/views/examples/firebase/User";
import * as firebase from "firebase/app";
import "firebase/firestore";
import CollectionReference = firebase.firestore.CollectionReference;
import DocumentData = firebase.firestore.DocumentData;
import {Todo} from "@/views/examples/todo-mvc/Todo";

export default class FireBaseClient {
    private todoRef:CollectionReference<DocumentData>;

    constructor() {
        const config = {
                apiKey: "AIzaSyD2s_RkAXuio6KDAco3qxh_7WKkKLHgXis",
                authDomain: "test-9b910.firebaseapp.com",
                databaseURL: "https://test-9b910.firebaseio.com",
                projectId: "test-9b910",
                storageBucket: "test-9b910.appspot.com",
                messagingSenderId: "76031565584",
                appId: "1:76031565584:web:80b7972fa39ff54b2e8f95"
            }

            firebase.initializeApp(config)
            this.todoRef = firebase.firestore().collection('todo')
    }

    get():Array<Todo> {
        const todoList = new Array<Todo>()
        this.todoRef.get().then( snapshot => {
            snapshot.forEach( doc => {
                const items = doc.data();
                todoList.push(new Todo(items._name, items.isActive))
            })
        });
        return todoList
    }

    set(todo: Todo):Promise<void>{
        return this.todoRef.doc(todo.name).set(Object.assign({}, todo))
    }

    remove(todo: Todo):Promise<void>{
        return this.todoRef.doc(todo.name).delete()
    }
}

