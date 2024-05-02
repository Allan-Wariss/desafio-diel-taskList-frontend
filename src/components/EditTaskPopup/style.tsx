import styled from "styled-components";


export const PopupEdit = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center; 
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContent = styled.div`
    background-color: white;
    display:flex;
    flex-direction:column;
    color: black;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.8rem;
`;

export const FormEdit = styled.form `
    display: flex;
    flex-direction: column;
    gap: 2rem;
`