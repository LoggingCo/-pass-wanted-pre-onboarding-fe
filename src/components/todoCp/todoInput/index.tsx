import { SetStateAction, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import CommonButton from 'components/common/button';
import useInput from 'hooks/useInput';
import TodoService from 'service/todoServeice';
import { TodoDataType, TodoPostType } from 'typings/db/post.type/todo';
import { TodoInpuTemp } from './style';
import debug from 'util/debug';
import { Dispatch } from 'react';
import { FC } from 'react';

//type
interface TodoInputType {
    todos: Array<TodoDataType>;
    setTodos: Dispatch<SetStateAction<TodoDataType[]>>;
}

const TodoInput: FC<TodoInputType> = ({ todos, setTodos }) => {
    // state
    const [todoText, onChangeTodoText, setTodoText] = useInput('');

    // mutate
    const todoMutate = useMutation((data: TodoPostType) => TodoService.create(data), {
        onSuccess: response => {
            debug(response);
            alert('투두리스트가 등록되었습니다');
            setTodos([response.data, ...todos]);
            setTodoText('');
        },
        onError: error => {
            debug(error);
            alert('등록에 실패하였습니다. 다시 등록해주세요');
        },
    });

    // create todo func
    const onCreateTodoHandler = useCallback(
        (e: any) => {
            e.preventDefault();
            if (todoText.trim() === '') {
                return;
            } else {
                const data = {
                    todo: todoText,
                };
                todoMutate.mutate(data);
            }
        },
        [todoText, todoMutate],
    );

    // render
    return (
        <TodoInpuTemp>
            <input type="text" value={todoText} onChange={onChangeTodoText} />
            <CommonButton
                size="full"
                mainColor="#D070FB"
                subColor="#fff"
                height="35px"
                onClick={onCreateTodoHandler}
                type="submit"
            >
                추가하기
            </CommonButton>
        </TodoInpuTemp>
    );
};
export default TodoInput;
