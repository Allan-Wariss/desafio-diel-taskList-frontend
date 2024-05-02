import styled from "styled-components";

export const ContentTask = styled.div `
    width:80vw;
    height: 80vh;
    background-color: white;
    border-radius:1rem;
    border-color:black;
    margin: 3rem 0 3rem 0;
`

export const ContentHeader = styled.header `
    font-size:4rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
    width:80vw;
    height: 15vh;
    background-color: #4f4fff;
    border-top-right-radius:1rem;
    border-top-left-radius:1rem;
    color:white;

`
export const ContentTaskMain = styled.div `
    display: flex;
    height:80vh;
    flex-direction:column;
    justify-content:start;
    gap: 20%;
    align-items:start;
    color: black;
    padding-left:2rem;
`
export const DateTask = styled.div `
    font-size: 2rem;
`
export const DescriptionTask = styled.div `
    font-size: 4rem;
`
export const DurationTask = styled.div `
    font-size: 2rem;
`
export const ButtonEdit = styled.header `
    font-size:2rem;
    width:10vw;
    text-align:center;
    background-color: #bf00ff;
    color:white;
    border-top-left-radius:1rem;

    &:hover{
        background-color: #6f0094;
        cursor: pointer;
    }

`
export const ButtonDelete = styled.header `
    font-size:2rem;
    width:10vw;
    text-align: center;
    background-color: #ff0000;
    color:white;
    border-bottom-left-radius:1rem;

    
    &:hover{
        background-color: #940000;
        cursor: pointer;
    }

`