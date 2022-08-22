import styled from '@emotion/styled';
import { StyleProps } from 'typings/style/style.type';

export const TodoTitleTemp = styled.div<StyleProps>`
    width: 100%;
    text-align: center;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${props => props.theme.mainColor};
    font-weight: bold;
`;
