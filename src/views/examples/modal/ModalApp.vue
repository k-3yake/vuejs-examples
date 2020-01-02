<template>
    <div>
        <div>This is App.</div>
        <input type="button" @click="showModal = true" value="show modal"/>
        <ModalComponent v-show="showModal" @modal-close="showModal = false">
            <div slot="header">
                <div>custom header</div>
                <button class="modal-default-button" @click="showModal = false">Close</button>
            </div>
        </ModalComponent>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import ModalComponent from "@/views/examples/modal/ModalCompnent.vue";

    @Component({
        components: {ModalComponent}
    })
    export default class ModalApp extends Vue {
        showModal: Boolean = false

        toggleShowModal() {
            this.showModal = true
        }
    }
</script>

<style scoped>

</style>
