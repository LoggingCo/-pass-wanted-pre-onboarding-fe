import styled from '@emotion/styled';

export const MainLayoutTemp = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const MainLayoutHeader = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    border-bottom: 1px solid #ebe4f9;

    & > div {
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
    }

    & > p {
        font-size: 10px;

        & > span {
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;
