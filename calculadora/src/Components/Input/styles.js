import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #ffaa9a;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font -size: 24px;
    font-family: 'Roboto';
    border-radius: 10px 10px 0 0;

    input {
        width: 100%;
        height: 100%;
        background-color: #ffaa9a;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 24px;
        font-family: 'Roboto';
        color: #fff;
    }
`;
