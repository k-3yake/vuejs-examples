<template>
    <svg width="200" height="200">
        <g>
            <polygon :points="points()"></polygon>
            <circle cx="100" cy="100" r="80"></circle>
            <template v-for="(key, index) in Array.from(params.getAll().keys())">
                <text :x="labelPoint(key, index).x" :y="labelPoint(key, index).y">{{key}}</text>
            </template>
        </g>
    </svg>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import {Params} from "@/views/examples/svg/SvgGraphApp.vue";

    @Component
    export default class PolygraphComponent extends Vue {
        @Prop({ required:true}) params: Params

        points () {
            const total = Array.from(this.params.getAll().values()).length
            const a = Array.from(this.params.getAll().values()).map((value, index) => {
                const point = this.valueToPoint(Number(value), index + 1, total)
                return point.x + ',' + point.y
            }).join(' ')
            return a
        }

        labelPoint(key: String, index: Number) {
            return this.valueToPoint(this.params.getAll().get(key), index.valueOf() + 10, Array.from(this.params.getAll().values()).length)
        }

        private valueToPoint (value: Number, index: number, total: number):{x:Number, y:Number} {
            var x     = 0
            var y     = -value * 0.8
            var angle = Math.PI * 2 / total * index
            var cos   = Math.cos(angle)
            var sin   = Math.sin(angle)
            var tx    = x * cos - y * sin + 100
            var ty    = x * sin + y * cos + 100
            return {
                x: tx,
                y: ty
            }
        }
    }
</script>

<style scoped>
    polygon {
        fill: #42b983;
        opacity: .75;
    }

    circle {
        fill: transparent;
        stroke: #999;
    }

    text {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 10px;
        fill: #666;
    }

    label {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
    }

    #raw {
        position: absolute;
        top: 0;
        left: 300px;
    }

</style>
