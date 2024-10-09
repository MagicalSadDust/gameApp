import styled from 'styled-components';

export const Container = styled.div`
    max-width: 357px;
    margin-top: 19px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #4D4D4D;
`; 

export const Letters = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 38px;
    height: 42px;
`;

export const InputLetter = styled.div`
    width: 42px;
    height: 42px;
    font-size: 30px;
    background-color: #F2F2F2;
    color: #4D4D4D;
    line-height: 52px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 30%;
    cursor: default;

    &:not(:last-child, :first-child) {
        margin: 0px 1px 0px 1px;
    }
    &:first-child {
        margin-right: 2px;
    }
    &:last-child {
        margin-left: 2px;
    }
`;