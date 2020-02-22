<template>
    <div>
        <div>FireBasePage</div>
        <div data-test="user-list">
            Users
            <div>{{users}}</div>
<!--
            <template v-for="user in users">
                <div>
                    <span v-bind:data-test="'user-name-' + index">name:{{ user.name}}</span>
                    <span v-bind:data-test="'user-email-' + index">mail:{{ user.email}}</span>
                </div>
            </template>
-->
        </div>
        <form v-on:submit.prevent="onSubmit">
            <input data-test="added-user-name"  type="text" v-model="newUser.name"/>
            <input  data-test="added-user-email" type="text" v-model="newUser.email"/>
            <button data-test="add-user" type="submit" @click="onSubmit">AddUser!!</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import {User} from './User'
    import {addUser, usersRef, users } from './FireBaseClient'
    import firebase from "firebase";
    import {firestorePlugin} from "vuefire";

    @Component({
    })
    export default class FireBasePage extends Vue {
        private newUser:User = new User("a","a");
        private users:any  = undefined;
        private index = 1;


        public created() {
            console.log(users)
        }

        onSubmit(){
            addUser(this.newUser)
            this.newUser = new User("","")
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
