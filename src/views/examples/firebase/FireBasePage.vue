<template>
    <div>
        <div>FireBasePage</div>
        <div data-test="user-list">
            <template v-for="(user,index) in users">
                <span v-bind:data-test="'user-name-' + index">{{ user.name}}</span>
                <span v-bind:data-test="'user-email-'* index">{{ user.email}}</span>
            </template>
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
    import {addUser, users} from './FireBaseClient'

    @Component
    export default class FireBasePage extends Vue {
        private newUser:User = new User("","")
        private users: Array<User> = []

        public created(){
            this.users = users()
        }

        onSubmit(){
            addUser(this.newUser)
            this.newUser = new User("","")
        }
    }
</script>

<style scoped>

</style>
