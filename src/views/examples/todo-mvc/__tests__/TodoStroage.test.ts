import 'jest';
import {Todo, TodoStatus} from "@/views/examples/todo-mvc/Todo";
import TodoStorage from "@/views/examples/todo-mvc/TodoStorage";
import {verifyAllWhenMocksCalled, when} from "jest-when";
import FireBaseClient from "@/views/examples/todo-mvc/FireBaseClient";
import flushPromises from 'flush-promises'

jest.mock("@/views/examples/todo-mvc/FireBaseClient")

describe('TodoStorage', () => {
    const initialList = [new Todo("todo1"),new Todo("todo2"),new Todo("todo3")]

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

    test('再取得のテスト_clientで取得出来た場合_その結果を返す', async () => {
        const newList = [new Todo("new1"),new Todo("new2")];
        when(FireBaseClient.prototype.get as any).calledWith().mockReturnValueOnce(newList)
        const todoStorage = new TodoStorage()
        expect(todoStorage.getTodoList()).toEqual(initialList)
        todoStorage.fetch()
        await flushPromises()
        expect(todoStorage.getTodoList()).toEqual(newList)
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
        const updatedTodo = new Todo(initialList[1].name)
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

describe('TodoStorage フィルターのテスト', () => {
    const active1 = new Todo("active1");
    const completed1 = new Todo("completed1",TodoStatus.COMPLETED);
    const active2 = new Todo("active2");
    const initialList = [active1,completed1,active2]

    beforeEach(() => {
        when(FireBaseClient.prototype.get as any).calledWith().mockReturnValue(Object.assign([],initialList))
    })

    afterEach(() => {
        verifyAllWhenMocksCalled()
    })

    test('Completeでフィルターした場合_Activeのものは一覧から消える', async () => {
        const todoStorage = new TodoStorage()
        todoStorage.filter(TodoStatus.COMPLETED)

        expect(todoStorage.getTodoList().indexOf(completed1)).not.toEqual(-1)
        expect(todoStorage.getTodoList().indexOf(active1)).toEqual(-1)
        expect(todoStorage.getTodoList().indexOf(active2)).toEqual(-1)
    })

    test('Activeでフィルターした場合_Completedのものは一覧から消える', async () => {
        const todoStorage = new TodoStorage()
        todoStorage.filter(TodoStatus.ACTIVE)

        expect(todoStorage.getTodoList().indexOf(completed1)).toEqual(-1)
        expect(todoStorage.getTodoList().indexOf(active1)).not.toEqual(-1)
        expect(todoStorage.getTodoList().indexOf(active2)).not.toEqual(-1)
    })

})

