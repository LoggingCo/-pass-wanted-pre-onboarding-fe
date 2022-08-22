import styled from '@emotion/styled';

export const MainBannerTemp = styled.div`
    width: 550px;
    height: 100%;
    background-color: #ebe4f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p:nth-of-type(2) {
        font-weight: bold;
        font-size: 24px;
    }

    & > p:last-child {
        font-weight: bold;
    }
`;
