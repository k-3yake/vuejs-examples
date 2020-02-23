import 'jest';
import {mount} from '@vue/test-utils'
import FireBasePage from "@/views/examples/firebase/FireBasePage.vue";
import {User} from "@/views/examples/firebase/User.ts";
import FireBaseClient from "@/views/examples/firebase/FireBaseClient.ts";
import {when} from "jest-when";
import flushPromises from 'flush-promises'

jest.mock('@/views/examples/firebase/FireBaseClient.ts')

describe('FireBasePage', () => {
    const mockedClass = <jest.Mock<FireBaseClient>>FireBaseClient;
    const client = FireBaseClient as jest.Mock<FireBaseClient>;

    beforeEach(() => {
    })

    test('初期表示でユーザーを表示する', () => {
        when(FireBaseClient.prototype.getUses as any)
            .calledWith()
            .mockReturnValue(new Array(new User("name1","email@a.com")))

        const wrapper = mount(FireBasePage)

        expect(wrapper.find('[data-test="user-name-0"]').text()).toBe("name1")
        expect(wrapper.find('[data-test="user-email-0"]').text()).toBe("email@a.com")
    })

    test('ユーザーを削除するとFirebaseに削除を送る', () => {
        // given
        var user = new User("name1","email@a.com");
        when(FireBaseClient.prototype.getUses as any)
            .calledWith()
            .mockReturnValue(new Array(user))
        const deleteMethod = jest.spyOn(FireBaseClient.prototype , 'deleteUser');

        // when
        const wrapper = mount(FireBasePage)
        wrapper.find('[data-test="delete-user-0"]').trigger('click')

        // then
        expect(deleteMethod).toBeCalledWith(user)
    })

    test('ユーザーを登録するとFirebaseにユーザー登録を送る', () => {
        // given
        when(FireBaseClient.prototype.getUses as any)
            .calledWith()
            .mockReturnValue(new Array(new User("name1", "email@a.com")))
        const addUserMethod = jest.spyOn(FireBaseClient.prototype , 'addUser');

        // when
        const wrapper = mount(FireBasePage)

        wrapper.find('[data-test="added-user-name"]').setValue("inputtedName")
        wrapper.find('[data-test="added-user-email"]').setValue("inputtedEmail")
        wrapper.find('[data-test="add-user-form"]').trigger("submit.prevent")

        // then
        expect(addUserMethod).toBeCalledWith(new User("inputtedName","inputtedEmail"))
    })
})
