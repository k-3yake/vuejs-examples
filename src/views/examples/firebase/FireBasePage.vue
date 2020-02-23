<template>
    <div>
        <div>FireBasePage</div>
        <div data-test="user-list">
            Users
            <template v-for="(user, index) in users">
                <div>
                    <span v-bind:data-test="'user-name-' + index">{{ user.name}}</span>
                    <span> - </span>
                    <span v-bind:data-test="'user-email-' + index">{{ user.email}}</span>
                    <button v-bind:data-test="'delete-user-' + index" @click="deleteUser(user)">X</button>
                </div>
            </template>
        </div>
        <form data-test="add-user-form" v-on:submit.prevent="addUser">
            <input data-test="added-user-name"  type="text" v-model="newUser.name"/>
            <input data-test="added-user-email" type="text" v-model="newUser.email"/>
            <input data-test="add-user" type="submit" value="AddUser"/>
        </form>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {User} from './User'
    import FireBaseClient from './FireBaseClient'

    @Component
    export default class FireBasePage extends Vue {
        private fireBaseClient = new FireBaseClient()
        private newUser:User = new User()
        private users = new Array<User>()

        public created(){
            this.initialize()
        }

        private initialize() {
            this.users = this.fireBaseClient.getUses()
            this.newUser = new User()
        }

        addUser(){
            this.fireBaseClient.addUser(this.newUser)
            this.initialize()
        }

        deleteUser(user: User) {
            this.fireBaseClient.deleteUser(user)
            this.initialize()
        }
    }
</script>

<style scoped>
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    ul {
        padding: 0;
    }

    .user {
        height: 30px;
        line-height: 30px;
        padding: 10px;
        border-top: 1px solid #eee;
        overflow: hidden;
        transition: all .25s ease;
    }

    .user:last-child {
        border-bottom: 1px solid #eee;
    }

    .v-enter, .v-leave-active {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        border-top-width: 0;
        border-bottom-width: 0;
    }

    .errors {
        color: #f00;
    }
</style>
