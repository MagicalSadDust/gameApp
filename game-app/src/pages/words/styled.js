import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Component = styled.div`
    display: flex;
    &:not(:last-child, :first-child) {
        margin: 3px 0px 3px 0px;
    }
    &:first-child {
        margin-bottom: 3px;
    }
    &:last-child {
        margin-top: 3px;
    }
`;

export const CellContainer = styled.div`
    width: ${({storedLevel}) => storedLevel === 2 || storedLevel === 5 ? '43px' : '72px' };
    height: ${({storedLevel}) => storedLevel === 2 || storedLevel === 5 ? '43px' : '72px' };
    font-size: ${({storedLevel}) => storedLevel === 2 || storedLevel === 5 ? '24px' : '40px' };
    background-color: ${(props) => props.idSolved ? '#65BD65' : '#F2F2F2'};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 30%;
    cursor: default;

    &:not(:last-child, :first-child) {
        margin: 0px 3px 0px 3px;
    }
    &:first-child {
        margin-right: 3px;
    }
    &:last-child {
        margin-left: 3px;
    }
`;