<template>
    <div id="select2">

    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
    import select2, {DataFormat} from 'select2'

    @Component
    export default class Select2WrapperComponent extends Vue {
        @Prop({ required: true }) options!: Array<DataFormat>
        @Prop({ required: true }) value!: Number;

        public mounted() {
            $("#select2").select2({ data: this.options }).val(this.value.valueOf()).trigger('change').on('change', () => this.$emit('select-input', this.value))
        }

        @Watch('value')
        public change(value: Number) {
            $(this.$el).val(value.valueOf()).trigger('change')
        }

        @Watch('options')
        public refreshOptions(options: Array<DataFormat>) {
            $(this.$el).empty().select2({ data: options})
        }

        public destroy() {
            $(this.$el).off().select2('destroy')
        }
    }
</script>

<style scoped>

</style>
