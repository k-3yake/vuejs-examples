import 'jest';
import TodoRow from "@/views/examples/todo-mvc/TodoRow.vue";
import Todo from "@/views/examples/todo-mvc/Todo";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {verifyAllWhenMocksCalled, when} from "jest-when";
import FireBaseClient from "@/views/examples/todo-mvc/FireBaseClient";
import flushPromises from 'flush-promises'

jest.mock("@/views/examples/todo-mvc/FireBaseClient")

describe('TodoStrage', () => {
    const initialList = new Array(new Todo("todo1"),new Todo("todo2"),new Todo("todo3"))

    beforeEach(() => {
        when(FireBaseClient.prototype.get as any).calledWith().mockReturnValueOnce(Object.assign([],initialList))
    })

    afterEach(() => {
        verifyAllWhenMocksCalled()
    })

    test('取得のテスト_clientで取得出来た場合_その結果を返す', () => {
        const todoStorage = new TodoStorage()
        expect(todoStorage.getTodoList()).toEqual(initialList)
    })

    test('保存のテスト_新規のTODOでclientで保存出来た場合_一覧に追加される', async () => {
        const addedTodo = new Todo("added")
        // TODO ts-ignoreを外したい
        // @ts-ignore
        when(FireBaseClient.prototype.set as any).expectCalledWith(addedTodo).mockResolvedValueOnce(Promise.resolve())
        const todoStorage = new TodoStorage()

        todoStorage.save(addedTodo)
        await flushPromises()

        expect(todoStorage.getTodoList().length).toEqual(initialList.length + 1)
        expect(todoStorage.getTodoList()[initialList.length]).toEqual(addedTodo)
    })

    test('保存のテスト_既存のTODOでclientで保存出来た場合_一覧が更新される', async () => {
        const updatedTodo = new Todo(initialList[1].name,false)
        // TODO ts-ignoreを外したい
        // @ts-ignore
        when(FireBaseClient.prototype.set as any).expectCalledWith(updatedTodo).mockResolvedValueOnce(Promise.resolve())
        const todoStorage = new TodoStorage()

        todoStorage.save(updatedTodo)
        await flushPromises()

        expect(todoStorage.getTodoList()[1]).toEqual(updatedTodo)
    })

    test('削除のテスト_clientで削除出来た場合_一覧から消える', async () => {
        const deletedTodo = initialList[1]
        // TODO ts-ignoreを外したい
        // @ts-ignore
        when(FireBaseClient.prototype.remove as any).expectCalledWith(deletedTodo).mockResolvedValueOnce(Promise.resolve())
        const todoStorage = new TodoStorage()

        todoStorage.remove(deletedTodo)
        await flushPromises()

        expect(todoStorage.getTodoList().indexOf(deletedTodo)).toEqual(-1)
    })
})
