import 'jest';
import {mount} from '@vue/test-utils'
import TodoRow from "@/views/examples/todo-mvc/TodoRow.vue";
import Todo from "@/views/examples/todo-mvc/Todo";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {verifyAllWhenMocksCalled, when} from "jest-when";

jest.mock("@/views/examples/todo-mvc/TodoStorage")

describe('TodoRow', () => {

    function mountTodoRow(todo: Todo, todoStorage: TodoStorage) {
        return mount(TodoRow, {
            propsData: {todo: todo, todoStorage: todoStorage}
        });
    }

    test('表示のテスト_todoがActiveの場合_Activeとして表示する', () => {
        const todo = new Todo("todoName",true);
        const wrapper = mountTodoRow(todo,new TodoStorage());
        expect(wrapper.find("[data-test='todo-row-status']").attributes().value).toEqual("Active")
        expect(wrapper.find("[data-test='todo-row-name']").text()).toEqual("todoName")
    })

    test('ステータス変更のテスト_todoがActiveの場合_Completedへ変更しストレージに保存する', () => {
        const todo = new Todo("todoName");
        const todoStorage = new TodoStorage();
        const wrapper = mountTodoRow(todo, todoStorage);
        when(todoStorage.save as any).expectCalledWith(new Todo("todoName",false)).mockReturnValue(null)
        wrapper.find("[data-test='todo-row-status']").trigger('click')

        verifyAllWhenMocksCalled()
    })

    test('ステータス変更のテスト_todoがCompletedの場合_Activeへの変更しストレージに保存する', () => {
        const todo = new Todo("todoName",false);
        const todoStorage = new TodoStorage();
        const wrapper = mountTodoRow(todo, todoStorage);
        when(todoStorage.save as any).expectCalledWith(new Todo("todoName",true)).mockReturnValue(null)
        wrapper.find("[data-test='todo-row-status']").trigger('click')

        verifyAllWhenMocksCalled()
    })

    test('削除のテスト_削除した場合_ストレージから削除する', () => {
        const todo = new Todo("todoName",false);
        const todoStorage = new TodoStorage();
        const wrapper = mountTodoRow(todo, todoStorage);
        when(todoStorage.remove as any).expectCalledWith(todo).mockReturnValue(null)
        wrapper.find("[data-test='todo-row-delete']").trigger('click')

        verifyAllWhenMocksCalled()
    })
})
