import 'jest';
import { shallowMount } from '@vue/test-utils'
import FireBasePage from "../FireBasePage.vue";

describe('FireBasePage', () => {
    test('ユーザーを追加出来る', () => {
        const wrapper = shallowMount(FireBasePage)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})