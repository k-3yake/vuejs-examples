import 'jest';
import {mount} from '@vue/test-utils'
import AddTodoRow from "@/views/examples/todo-mvc/AddTodoRow.vue";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {verifyAllWhenMocksCalled, when} from "jest-when";
import Todo from "@/views/examples/todo-mvc/Todo";

jest.mock("@/views/examples/todo-mvc/TodoStorage")

describe('AddTodoRow', () => {

    test('追加のテスト_TODOが入力されエンターを押された場合_ストレージにTODOを追加する', () => {
        const todoStareg = new TodoStorage()
        when(todoStareg.save as any).expectCalledWith(new Todo(("name1"))).mockReturnValue(null)
        const wrapper = mount(AddTodoRow, {
            propsData : {
                todoStorage:todoStareg
            }
        })

        wrapper.find('[data-test="input-name"]').setValue("name1")
        wrapper.find('[data-test="input-name"]').trigger("keydown.enter")

        verifyAllWhenMocksCalled()
    })

})
