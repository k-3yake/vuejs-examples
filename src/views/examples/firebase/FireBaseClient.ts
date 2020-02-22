import {User} from "@/views/examples/firebase/User";
import firebase from "firebase"


const config = {
    apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
    authDomain: "vue-demo-537e6.firebaseapp.com",
    databaseURL: "https://vue-demo-537e6.firebaseio.com"
}
firebase.initializeApp(config)
const usersRef = firebase.database().ref('users')


function addUser(user: User){
    console.log(user)
}

function removeUser(user: User) {

}

function users() {
    return usersRef
}

export {
    addUser,
    removeUser,
    users,
    usersRef
}

