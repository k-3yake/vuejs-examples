<template>
    <div>
        bbbb
        <slot v-bind:user="user">{{ user.firstName }}</slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {User} from "@/views/14_slot/modules";

    @Component
    export default class CurrentUser extends Vue {
        @Prop() private user?: User = new User("firstName", "lastName");
    }
</script>

<style scoped>

</style>