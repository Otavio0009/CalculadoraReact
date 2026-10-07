import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #ffaa9a;
    width: 16%;
    heigth: 100;


    border-radius: 10px;
`;

export const Row = styled.div`
    display: felx;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Column = styled.div`
    display: felx;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;