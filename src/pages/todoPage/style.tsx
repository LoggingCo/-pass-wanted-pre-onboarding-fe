import styled from '@emotion/styled';
import { StyleProps } from 'typings/style/style.type';

export const TodoPageInner = styled.div`
    width: 100%;
    height: calc(100vh - 4rem);
    padding: 2rem 0;
`;

export const TodoPageForm = styled.form<StyleProps>`
    position: relative;
    width: 440px;
    height: 100%;
    margin: 0 auto;
    overflow-y: auto;
    background-color: #fff;
    box-shadow: 5px 5px 0px 1px #4545, -5px -5px 5px 5px ${props => props.theme.mainColor};

    & > .listbox {
        width: 360px;
        padding-bottom: 120px;
        margin: 0 auto;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        height: 30%;
        background-color: ${props => props.theme.mainColor};
    }

    ::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, 0.1);
    }
`;
