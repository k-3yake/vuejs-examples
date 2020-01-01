<template>
    <svg width="200" height="200">
        <g>
            <polygon :points="points()"></polygon>
            <circle cx="100" cy="100" r="80"></circle>
            <template v-for="(key, index) in params.keys()">
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
        @Prop({ required:true }) params!: Params

        points () {
            return Array.from(this.params.keys()).map((key, index) => {
                const point = this.valueToPoint(this.params.value(key).valueOf(), index + 1)
                return point.x + ',' + point.y
            }).join(' ')
        }

        labelPoint(key: String, index: Number) {
            return this.valueToPoint(this.params.value(key).valueOf() + 15, index.valueOf() + 1)
        }

        private valueToPoint (value: number, index: number):{x:Number, y:Number} {
            var total = this.params.keys().length
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
