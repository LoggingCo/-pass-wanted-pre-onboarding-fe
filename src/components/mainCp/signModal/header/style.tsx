import styled from '@emotion/styled';
import { StyleProps } from 'typings/style/style.type';

export const SignHeaderTemp = styled.div<StyleProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    height: 32px;
    font-size: 14px;
    background-color: ${props => props.theme.mainColor};
`;
