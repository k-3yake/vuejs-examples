import 'jest';
import { mount } from '@vue/test-utils'
import FireBasePage from "@/views/examples/firebase/FireBasePage.vue";
import {User} from "@/views/examples/firebase/User.ts";
import {addUser, users} from "@/views/examples/firebase/FireBaseClient";
import { mocked } from 'ts-jest/utils'
import {when} from "jest-when";

jest.mock("@/views/examples/firebase/FireBaseClient")

describe('FireBasePage', () => {
    beforeEach(() => {
    })

    test('初期表示でユーザーを表示する', () => {
        const mockedUsersFun = users as jest.MockedFunction<typeof users>
        mockedUsersFun.mockReturnValueOnce([new User("name1","email@a.com")])

        const wrapper = mount(FireBasePage)

        expect(wrapper.find('[data-test="user-name-0"]').text()).toBe("name1")
        expect(wrapper.find('[data-test="user-email-0"]').text()).toBe("email@a.com")
    })

    test('ユーザーを追加出来る', () => {
        const wrapper = mount(FireBasePage)
        wrapper.find('[data-test="added-user-name"]').setValue('name1')
        wrapper.find('[data-test="added-user-email"]').setValue('email@a.com')
        wrapper.find('[data-test="add-user"]').trigger("click")
        expect(addUser).toBeCalledWith(new User("name1","email@a.com"));
    })



    /*
        test('ユーザーの一覧が表示される', () => {
            const wrapper = shallowMount(FireBasePage)
            wrapper.vm.$data.users[0] = new User("name1","email1@a.com")
            wrapper.vm.$data.users[0] = new User("name2","email2@a.com")
            expect(wrapper.find('[data-test="user-list"]').find('[data-test="user-name-1"]').text()).toBe("name1")
            expect(wrapper.find('[data-test="user-list"]').find('[data-test="user-email-1"]').text()).toBe("email1@a.com")
            expect(wrapper.find('[data-test="user-list"]').find('[data-test="user-name-2"]').text()).toBe("name2")
            expect(wrapper.find('[data-test="user-list"]').find('[data-test="user-email-2"]').text()).toBe("email2@a.com")
        })
    */

})
