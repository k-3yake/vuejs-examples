<template>
    <div>
        <div>
            <div>slot</div>
            <div>単純にslotで差し込む</div>
            <NavigationLink linkText="aaaaaa">{{ message }}</NavigationLink>
            <div>子でバインドされたuserでslotを変更</div>
            <CurrentUser >
                <!--警告出ちゃってる-->
                <template v-slot="{ user }">{{ user.lastName }}</template>
            </CurrentUser>
        </div>

        <div>
            <div>スロットプロパティによる再利用可能なテンプレート</div>
            <div>
                <!--警告出ちゃってる-->
                <todo-list v-bind:todos="todoItems">
                    <template v-slot:todo="{ todo }">
                        <div>
                            {{ todo.text }}
                        </div>
                    </template>
                </todo-list>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import NavigationLink from '@/views/14_slot/NavigationLink.vue'
    import CurrentUser from "@/views/14_slot/CurrentUser.vue";
    import TodoList from "@/views/14_slot/ToDoList.vue";
    import {TodoItem} from "@/views/14_slot/TodoItem";

    @Component({
        components: {
            NavigationLink,
            CurrentUser,
            TodoList,
        }
    })
    export default class SulotApp extends Vue {
        public message: String = "Hello";
        public todoItems: Array<TodoItem> = [ new TodoItem(1, "item1"), new TodoItem(2, "item2")]
    }

</script>

<style scoped>

</style>