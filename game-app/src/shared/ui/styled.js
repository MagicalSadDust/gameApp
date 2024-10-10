import styled from 'styled-components';

export const TitleComponent = styled.h1`
    font-size: 1rem;
    margin: 0px 0px 57px 0px;
    
    @media (max-width: 450px) {
        margin: 0px 0px 10px 0px;
    }
`;

export const ModalComponent = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10px;
    text-align: center;
    width: 83%;
    height: 428px;
    color: #4D4D4D;
    border-radius: 40px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
`;

export const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    gap: 40px;
    padding-top: 75px;
`;

export const Button = styled.button`
    width: 306px;
    height: 83px;
    gap: 0px;
    background: #65BD65;
    color: #fff;
    font-size: 40px;
    line-height: 36.76px;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    margin: 0px;
    box-shadow: 0px 5px #508853;
    :hover {
        opacity: .7;
    }
`;

export const Image = styled.img.attrs(() => ({ src: '/popup_ribbon.png'}))`
    position: absolute;
    top: -29px;
`;

export const Title = styled.h1`
    position: absolute;
    color: #fff;
    top: -29px;
    font-size: 40px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;

`;