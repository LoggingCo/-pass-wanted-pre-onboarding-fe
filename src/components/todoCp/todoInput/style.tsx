import styled from '@emotion/styled';
import { StyleProps } from 'typings/style/style.type';

export const TodoInpuTemp = styled.div<StyleProps>`
    width: 440px;
    padding: 16px;
    position: fixed;
    bottom: 32px;
    background-color: ${props => props.theme.mainColor};

    & input[type='text'] {
        display: block;
        padding: 4px 0;
        border-radius: 8px;
        border: 1px solid rgba(118, 118, 118, 0.5);
        width: 100%;
        font-size: 14px;
        text-align: center;
        margin-bottom: 16px;

        ::placeholder {
            color: rgba(118, 118, 118, 0.5);
        }
    }
`;
