import { FC, SetStateAction } from 'react';
import { TodoListCard } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import { TodoDataType, TodoUpdateType } from 'typings/db/post.type/todo';
import { useState } from 'react';
import useInput from 'hooks/useInput';
import CommonButton from 'components/common/button';
import { useMutation } from '@tanstack/react-query';
import TodoService from 'service/todoServeice';
import debug from 'util/debug';
import { useCallback } from 'react';
import { Dispatch } from 'react';

interface TodoListProps {
    todos: TodoDataType[];
    todo: TodoDataType;
    setTodos: Dispatch<SetStateAction<TodoDataType[]>>;
}

const TodoList: FC<TodoListProps> = ({ todos, todo, setTodos }) => {
    // state
    const [eidtTodo, setEditTodo] = useState(false);
    const [newTodo, onChangeTodo] = useInput(todo.todo);

    // mutate
    const completeUpdateMutate = useMutation((data: TodoUpdateType) => TodoService.update(data), {
        onSuccess: response => {
            debug(response);
            const Todos = [...todos];
            const todoIndex = Todos.findIndex(v => v.id === todo.id);
            Todos[todoIndex].isCompleted = response.data.isCompleted;
            setTodos(Todos);
        },
        onError: error => {
            debug(error);
            alert('완료 상태 변경에 실패하셨습니다');
        },
    });

    const todoUpdateMutate = useMutation((data: TodoUpdateType) => TodoService.update(data), {
        onSuccess: response => {
            debug(response);
            alert('투두리스트가 변경되었습니다');
            const Todos = [...todos];
            const todoIndex = Todos.findIndex(v => v.id === todo.id);
            Todos[todoIndex].todo = response.data.todo;
            setTodos(Todos);
            setEditTodo(false);
        },
        onError: error => {
            debug(error);
            alert('완료 상태 변경에 실패하셨습니다');
        },
    });

    const todoDeleteMutate = useMutation((id: number) => TodoService.delete(id), {
        onSuccess: response => {
            debug(response);
            alert('투두리스트가 삭제되었습니다');
            const Todos = todos.filter(v => v.id !== todo.id);
            setTodos(Todos);
        },
        onError: error => {
            debug(error);
            alert('삭제에 실패하셨습니다');
        },
    });

    // only state Update func
    const completeUpdateHandler = useCallback(() => {
        const data = {
            id: todo.id,
            data: {
                todo: todo.todo,
                isCompleted: !todo.isCompleted,
            },
        };
        completeUpdateMutate.mutate(data);
    }, [todo]);

    // only state todo func
    const todoUpdateHandler = useCallback(() => {
        if (newTodo === todo.todo) {
            setEditTodo(false);
        } else {
            const data = {
                id: todo.id,
                data: {
                    todo: newTodo,
                    isCompleted: todo.isCompleted,
                },
            };
            todoUpdateMutate.mutate(data);
        }
    }, [todo, newTodo]);

    // remove func
    const todoDeleteHandler = useCallback(() => {
        todoDeleteMutate.mutate(todo.id);
    }, [todo]);

    // render
    return (
        <TodoListCard isCompleted={todo.isCompleted}>
            <div className="todoTitle">
                List
                <div className="updateBtn" onClick={completeUpdateHandler}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
            </div>
            <div className="todoCotent">
                {eidtTodo ? (
                    <>
                        <input type="text" value={newTodo} onChange={onChangeTodo} />
                        <div>
                            <CommonButton
                                size="small"
                                fontSzie="10px"
                                type="button"
                                onClick={todoUpdateHandler}
                            >
                                수정하기
                            </CommonButton>
                            <CommonButton
                                size="small"
                                fontSzie="10px"
                                type="button"
                                onClick={() => setEditTodo(false)}
                            >
                                돌아가기
                            </CommonButton>
                        </div>
                    </>
                ) : (
                    <>
                        {todo.todo}
                        <span onClick={() => setEditTodo(true)}>
                            <FontAwesomeIcon icon={faPen} />
                        </span>
                    </>
                )}
            </div>
            <div className="deletBtn" onClick={todoDeleteHandler}>
                <FontAwesomeIcon icon={faBan} />
            </div>
        </TodoListCard>
    );
};
export default TodoList;
