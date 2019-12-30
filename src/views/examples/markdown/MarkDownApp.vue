<template>
    <div>
        <textarea :value="inputValue" @input="update"/>
        <div v-html="compiledMarkdown()"></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
    import marked from 'marked'
    import * as _ from "lodash";


    @Component
    export default class MarkDownApp extends Vue {
        private inputValue: string = "# hello";


        public update(event: Event){
            if (event.target instanceof HTMLTextAreaElement) {
                const self = this;
                const f = _.debounce( (event) => self.inputValue = event.target.value, 300)
                f(event)
            }
        }

        public compiledMarkdown() {
            return marked( this.inputValue, { sanitize: true })
        }
    }
</script>

<style scoped>

</style>
