import { Vue} from 'vue-property-decorator';

const AsyncComponent = () => ({
    compnents: LazyLoadComponent

})

const LazyLoadComponent = Vue.component(
    'async-example',
    function (resolve, reject) {
        setTimeout(function () {
            // resolve コールバックにコンポーネント定義を渡します
            resolve({
                template: '<div>I am lazy!</div>'
            })
        }, 1000)
    })


export default AsyncComponent