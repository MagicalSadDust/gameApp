import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 27px;
    width: 40rem;
    height: 1136px;
    max-width: 640px;
    color: #fff;
    background-color: #2B344B;
    box-shadow: 0px 0px 15px 3px black;

    @media (max-width: 450px) {
        width: 100%;
        height: 100vh;
    }
`; 
