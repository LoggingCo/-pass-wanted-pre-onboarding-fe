import styled from '@emotion/styled';
import { StyleProps } from 'typings/style/style.type';

export const TodoListCard = styled.div<StyleProps>`
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px 0;

    & > .todoTitle {
        background-color: ${props => props.theme.mainColor};
        width: 100%;
        text-align: center;
        position: relative;
        padding: 8px 0;

        & > .updateBtn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: ${props => (props.isCompleted ? '#fff' : '#eee')};
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -10px;
            left: -10px;
            cursor: pointer;
            color: ${props => (props.isCompleted ? '#3CB371' : '#999')};
        }
    }

    & > .todoCotent {
        width: 90%;
        text-align: center;
        padding: 16px;

        & > input[type='text'] {
            display: block;
            width: 100%;
            text-align: center;
            color: #999;
            border-radius: 8px;
            border: 1px solid ${props => props.theme.mainColor};
            margin-bottom: 10px;
        }

        & > span {
            margin-left: 16px;
            cursor: pointer;
            color: #d070fb;
        }
    }

    & > .deletBtn {
        color: #ff0000;
        padding: 8px;
        width: 100%;
        text-align: center;
        border-top: 1px solid ${props => props.theme.mainColor};
        cursor: pointer;
    }
`;
