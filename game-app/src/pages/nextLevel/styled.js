import styled, { css } from 'styled-components';

const textStyle = css`
    font-family: 'VAG World';
    font-weight: 700;
    text-align: center;
    margin: 0px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 100%;
`; 

export const Button = styled.button`
    width: 330px;
    height: 94.29px;
    gap: 0px;
    background: #65BD65;
    color: #fff;
    font-size: 40px;
    line-height: 36.76px;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    ${textStyle}
    :hover {
        opacity: .7;
    }
`;

export const Title = styled.p`
    font-size: 37px;
    line-height: 34px;
    ${textStyle}
    margin-bottom: 20px;
`;
export const Subtitle = styled.p`
    font-size: 53px;
    line-height: 48.71px;
    ${textStyle}
`;