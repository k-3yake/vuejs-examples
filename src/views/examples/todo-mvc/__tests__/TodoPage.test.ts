import 'jest';
import {mount} from '@vue/test-utils'
import TodoPage from "@/views/examples/todo-mvc/TodoPage.vue";
import AddTodoRow from "@/views/examples/todo-mvc/AooTodoRow.vue";
import Todo from "@/views/examples/todo-mvc/Todo";
import Vue from "vue";

describe('TodoPage', () => {

    test('表示のテスト_TODOがない場合_追加行のみを表示する', () => {
        const wrapper = mount(TodoPage)
        expect(wrapper.find(AddTodoRow).exists()).toBeTruthy()
    })

    test('追加のテスト_ストレージに追加があった場合_追加されたTODOが表示される', async () => {
        const wrapper = mount(TodoPage)
        wrapper.vm.$data.todoStorage.add(new Todo("added1"))
        await Vue.nextTick()

        expect(wrapper.find('[data-test="todo-row-added1"]').exists()).toBeTruthy()
    })

    test('削除のテスト_ストレージから削除された場合_リストにそのTODOが表示されない',async () => {
        // given
        const wrapper = mount(TodoPage)
        const todo = new Todo("added1");
        wrapper.vm.$data.todoStorage.add(todo)
        await Vue.nextTick()
        expect(wrapper.find('[data-test="todo-row-added1"]').exists()).toBeTruthy()

        // when
        wrapper.vm.$data.todoStorage.remove(todo)
        await Vue.nextTick()

        // then
        console.log(wrapper.html())
        expect(wrapper.find('[data-test="todo-row-added1"]').exists()).not.toBeTruthy()
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
