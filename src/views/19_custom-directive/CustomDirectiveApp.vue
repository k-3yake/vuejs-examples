<template>
    <div>
        <div v-pin:[direction]="200">pined</div>
        <input v-focus type="text">
        <div v-directive-info:foo.a.b="message"></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import { DirectiveOptions } from 'vue';

    @Component({
        directives: {
            "focus": <DirectiveOptions>{
                inserted(el) {
                    el.focus()
                }
            },
            "directive-info": <DirectiveOptions> {
                bind(el, binding, vnode){
                    var s = JSON.stringify
                    el.innerHTML =
                        'name: '       + s(binding.name) + '<br>' +
                        'value: '      + s(binding.value) + '<br>' +
                        'expression: ' + s(binding.expression) + '<br>' +
                        'argument: '   + s(binding.arg) + '<br>' +
                        'modifiers: '  + s(binding.modifiers) + '<br>' +
                        'vnode keys: ' + Object.keys(vnode).join(', ')
                }
            },
            "pin": <DirectiveOptions> {
                bind(el, binding, vnode) {
                    el.style.position = 'fixed';
                    el.style.setProperty(binding.arg == 'left' ? 'left': 'top', binding.value + 'px');
                }
            }
        }
    })
    export default class CustomDirectiveApp extends Vue {
        message = "hello";
        direction = "left"
    }
</script>

<style scoped>

</style>
