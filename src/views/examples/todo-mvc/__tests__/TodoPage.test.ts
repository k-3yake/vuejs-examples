import 'jest';
import {mount, shallowMount} from '@vue/test-utils'
import TodoPage from "@/views/examples/todo-mvc/TodoPage.vue";
import AddTodoRow from "@/views/examples/todo-mvc/AddTodoRow.vue";
import {Todo} from "@/views/examples/todo-mvc/Todo";
import Vue from "vue";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {when} from "jest-when";
import TodoListMenu from "@/views/examples/todo-mvc/TodoListMenu.vue";

jest.mock("@/views/examples/todo-mvc/TodoStorage")

describe('TodoPage', () => {

    test('表示のテスト_TODOがない場合_追加行とメニューのみを表示する', () => {
        const wrapper = mount(TodoPage)
        expect(wrapper.find(AddTodoRow).exists()).toBeTruthy()
        expect(wrapper.find(TodoListMenu).exists()).toBeTruthy()
    })

    test('追加のテスト_ストレージのリストに変更があった場合_変更して表示する', async () => {
        const todoList:Array<Todo> = []
        when(TodoStorage.prototype.getTodoList as any)
            .calledWith()
            .mockReturnValue(todoList)
        const wrapper = mount(TodoPage)
        // @ts-ignore
        expect(wrapper.vm.todoList).toEqual([])

        todoList.push(new Todo("added1"))

        // @ts-ignore
        expect(wrapper.vm.todoList).toEqual([new Todo("added1")])
    })
})
