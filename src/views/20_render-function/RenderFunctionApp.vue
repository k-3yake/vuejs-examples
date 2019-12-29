<template>
<!--テンプレートではなくプログラミングにより描画を行う-->
<!--パラメータを元にしてレンダリングするエレメントやhtmlタグ自体が変わるような場合、テンプレートが冗長になりやすく上手く行かない-->
<!--https://qiita.com/mochizukikotaro/items/8c6144a3b745702c9220-->
    <div>
        <Head :level="2">Head!!</Head>
        <Duplicate></Duplicate>
        <CustomInput></CustomInput>
        <HelloWorld></HelloWorld>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import {CreateElement, RenderContext, VNode} from "vue";
    import HelloWorld from "@/views/20_render-function/HelloWorld.tsx";

    @Component
    class Head extends Vue {
        @Prop() private level!: Number;

        public render(h: CreateElement): VNode {
            return h("h" + this.level,this.$slots.default);
        }
    }

    @Component
    class Duplicate extends Vue {
        public render(h: CreateElement): VNode {
            var element = h('p','hi')
            return h('div',[element, element]);
        }
    }

    @Component
    class CustomInput extends Vue {
        private value: string = "init text."
@Prop()
        public render(createElement: CreateElement): VNode {
            var self = this;
            var input = createElement('input',{
                domProps: {
                    value: this.value
                },
                on: {
                    input: function (event: Event) {
                        if (event.target instanceof HTMLInputElement) {
                            self.value = event.target.value
                        }
                    }
                }
            })
            var text = createElement('div',this.value)
            return createElement('div',[input, text])
        }
    }

    @Component({
        components: { Head, Duplicate, CustomInput, HelloWorld }
    })
    export default class Hoge extends Vue {   }
</script>

<style scoped>

</style>
