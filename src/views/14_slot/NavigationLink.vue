<template>
    <div>
        <a>{{ linkText }}</a>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class NavigationLink extends Vue {
        @Prop() private linkText!: string;
    }
</script>

<style scoped>

</style>