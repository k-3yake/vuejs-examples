import 'jest';
import {shallowMount} from '@vue/test-utils'
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {verifyAllWhenMocksCalled, when} from "jest-when";
import TodoListMenu from "@/views/examples/todo-mvc/TodoListMenu.vue";
import {TodoStatus} from "@/views/examples/todo-mvc/Todo";


jest.mock("@/views/examples/todo-mvc/TodoStorage")

describe('TodoListMenu', () => {

    function crateTodoListMenu(todoStrage: TodoStorage) {
        return shallowMount(TodoListMenu, {
            propsData: {
                todoStorage: todoStrage
            }
        })
    }

    test('フィルターのテスト_Completeでフィルターした場合_ストレージのCompleteフィルターを呼び出す', () => {
        const todoStorage = new TodoStorage()
        when(todoStorage.filter as any).expectCalledWith(TodoStatus.COMPLETED)
        const wrapper = crateTodoListMenu(todoStorage)

        wrapper.find('[data-test="filter-complete"]').trigger('click')

        verifyAllWhenMocksCalled()
    })

    test('フィルターのテスト_Activeでフィルターした場合_ストレージのActiveフィルターを呼び出す', () => {
        const todoStorage = new TodoStorage()
        when(todoStorage.filter as any).expectCalledWith(TodoStatus.ACTIVE)
        const wrapper = crateTodoListMenu(todoStorage)

        wrapper.find('[data-test="filter-active"]').trigger('click')

        verifyAllWhenMocksCalled()
    })

    test('フィルター解除のテスト_解除された場合_ストレージのfetchを呼び出す', () => {
        const todoStorage = new TodoStorage()
        when(todoStorage.fetch as any).expectCalledWith(null)
        const wrapper = crateTodoListMenu(todoStorage)

        wrapper.find('[data-test="filter-remove"]').trigger('click')

        verifyAllWhenMocksCalled()
    })



    test('フィルターのテスト_ALLの場合_ストレージのfetchを呼び出す', () => {

    })

    test('フィルターのテスト_Activeでフィルターした場合_ストレージのActiveフィルターを呼び出す', () => {

    })

    test('Completedのクリアーのテスト_Completedがない場合_Completedの実行が出来ない', () => {

    })

    test('Completedのクリアーのテスト_Completedがある場合_Completedが全部削除出来る', () => {

    })
})
