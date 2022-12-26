import styled from "styled-components"

export const Button = (props:any) => {
    return (
        <Basic>{props.text}</Basic>
    )
}

const Basic = styled.button`
    background-color: white;
    color:#3F3F3F;
    border: 1px solid #dddddd;
    height:50px;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;

    &:hover{
        background-color: #ECF4FF;
        border: none;
        color:#444BFF;
    }
`