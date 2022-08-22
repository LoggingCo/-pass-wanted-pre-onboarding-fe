import styled from '@emotion/styled';

export const SignModalTemp = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    background-color: #eee;
`;

export const SignForm = styled.div`
    width: 90%;
    padding: 24px 16px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & input[type='text'],
    input[type='password'] {
        display: block;
        margin: 4px 0;
        padding: 4px 0;
        border-radius: 8px;
        border: 1px solid rgba(118, 118, 118, 0.5);
        width: 100%;
        font-size: 14px;
        text-align: center;

        ::placeholder {
            color: rgba(118, 118, 118, 0.5);
        }
    }

    & > p {
        width: 100%;
        font-size: 10px;
        text-align: center;
        color: #ff0000;
    }

    & > button {
        margin-top: 8px;
    }
`;
