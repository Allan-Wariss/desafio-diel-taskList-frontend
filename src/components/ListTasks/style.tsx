import styled from "styled-components";

export const AllTasks= styled.div `
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    width: 80vw;
    background-color:white;
    color: black;
    border-radius: 1rem;
`

export const HeaderTasks= styled.header `
    text-align: center;
    background-color: #4f4fff;
    color: white;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
`
export const UlTasks= styled.ul `
    width: 80vw;
`
export const LiTasks= styled.li `
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
        &:hover{
            background-color:#cfcfcf;
            cursor: pointer;
    }
`
