import {User} from "@/views/examples/firebase/User";


function addUser(user: User) {
    console.log(user)
}

function removeUser(user: User) {

}

function users():Array<User> {
    return []
}

export {
    addUser,
    removeUser,
    users
}

