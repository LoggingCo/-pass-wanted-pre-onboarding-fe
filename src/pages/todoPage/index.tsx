import TodoInput from 'components/todoCp/todoInput';
import TodoList from 'components/todoCp/todoList';
import TodoTItle from 'components/todoCp/todoTitle';
import MainLayout from 'layout/mainLayout';
import { TodoPageForm, TodoPageInner } from './style';
import { useQuery } from '@tanstack/react-query';
import TodoService from 'service/todoServeice';
import { TodoDataType } from 'typings/db/post.type/todo';
import { useState } from 'react';
import { useEffect } from 'react';

const TodoPage = () => {
    const todoRead = useQuery(['todoList'], () => TodoService.read());
    const [todos, setTodos] = useState<Array<TodoDataType>>([]);

    useEffect(() => {
        setTodos(todoRead.data?.data);
    }, [todoRead.data?.data]);

    return (
        <MainLayout>
            <TodoPageInner>
                <TodoPageForm>
                    <TodoTItle />
                    <div className="listbox">
                        {todos &&
                            todos.map((v: TodoDataType) => (
                                <TodoList todos={todos} key={v.id} todo={v} setTodos={setTodos} />
                            ))}
                    </div>
                    <TodoInput todos={todos} setTodos={setTodos} />
                </TodoPageForm>
            </TodoPageInner>
        </MainLayout>
    );
};
export default TodoPage;
