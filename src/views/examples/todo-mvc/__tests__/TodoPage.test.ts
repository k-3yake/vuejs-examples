import 'jest';
import {mount} from '@vue/test-utils'
import TodoPage from "@/views/examples/todo-mvc/TodoPage.vue";
import AddTodoRow from "@/views/examples/todo-mvc/AddTodoRow.vue";
import Todo from "@/views/examples/todo-mvc/Todo";
import Vue from "vue";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {when} from "jest-when";

jest.mock("@/views/examples/todo-mvc/TodoStorage")

describe('TodoPage', () => {

    test('表示のテスト_TODOがない場合_追加行のみを表示する', () => {
        const wrapper = mount(TodoPage)
        expect(wrapper.find(AddTodoRow).exists()).toBeTruthy()
    })

    test('追加のテスト_リストに変更があった場合_リストを変更して表示する', async () => {
        const todoList = new Array()

        when(TodoStorage.prototype.getTodoList as any)
            .calledWith()
            .mockReturnValue(todoList)

        const wrapper = mount(TodoPage)
        expect(wrapper.find('[data-test="todo-row-added1"]').exists()).not.toBeTruthy()
        todoList.push(new Todo("added1"))
        await Vue.nextTick()

        expect(wrapper.find('[data-test="todo-row-added1"]').exists()).toBeTruthy()
    })

    test('フィルターのテスト_ALLの場合_ActiveもCompletedも表示される', () => {

    })

    test('フィルターのテスト_Activeの場合_Activeのみ表示される', () => {

    })

    test('フィルターのテスト_Completedの場合_Completedのみ表示される', () => {

    })

    test('Completedのクリアーのテスト_Completedがない場合_Completedの実行が出来ない', () => {

    })

    test('Completedのクリアーのテスト_Completedがある場合_Completedが全部削除出来る', () => {

    })
})
