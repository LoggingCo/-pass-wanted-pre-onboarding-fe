import styled from '@emotion/styled';

export const LoginFormTemp = styled.div`
    margin: 0 auto;
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;

    & input[type='text'],
    input[type='password'] {
        display: block;
        margin: 8px 0;
        padding: 10px 8px 10px 32px;
        border-radius: 8px;
        border: 1px solid rgba(118, 118, 118, 0.5);
        width: 440px;

        ::placeholder {
            color: rgba(118, 118, 118, 0.5);
        }
    }

    & > p:nth-of-type(1) {
        font-size: 24px;
        font-weight: bold;
    }

    & > div {
        margin-top: 16px;
    }
`;
