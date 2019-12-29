<template>
    <div>
        <div>
            <button v-on:click="show = !show"> Toggle</button>
        </div>
        <div>
            <h3>simple</h3>
            <transition>
                <p v-if="show">hello</p>
            </transition>
        </div>
        <div>
            <h3>example-1</h3>
            <transition name="slide-fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
        <div>
            <h3>example-1</h3>
            <transition name="bounce">
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class TransitionApp extends Vue {
        show = true
    }
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: opacity 1s;
    }

    .v-enter, .v-leave-to {
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }

    /*
    bouce
    */
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>