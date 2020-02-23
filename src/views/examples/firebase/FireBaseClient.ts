import {User} from "@/views/examples/firebase/User";
import * as firebase from "firebase/app";
import "firebase/firestore";
import CollectionReference = firebase.firestore.CollectionReference;
import DocumentData = firebase.firestore.DocumentData;

export default class FireBaseClient {
    private usersRef:CollectionReference<DocumentData>;

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
            this.usersRef = firebase.firestore().collection('users')
    }

    public getUses():Array<User> {
        const users = new Array()
        this.usersRef.get().then( snapshot => {
            snapshot.forEach( doc => {
                users.push(doc.data())
            })
        });
        return users
    }

    addUser(user: User){
        this.usersRef.doc(user.email).set(Object.assign({}, user)).catch((e) => console.error(e))
    }

    deleteUser(user: User){
        this.usersRef.doc(user.email).delete().catch((e) => console.error(e))
    }
}
