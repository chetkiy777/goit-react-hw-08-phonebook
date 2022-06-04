import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: white;
    margin-right: 20px;
    margin-left: 20px;
    color: #fff;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 10px 1px #000, 0 0 1px rgba(0, 0, 0, .5) inset;
    border-radius: 10px;
    padding: 30px 20px;
    margin-top: 70px;
    margin-left: 40%;
    background-color: #ffed83;
    width: 400px;

    label {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;
        

        input {         
            margin-top: 5px;
            border-radius: 3px;
            border: 1px solid #000;
        }
    }

    button {
        display: block;
        font-weight: bold;
        font-size: 14px;
        background-color: #4169e1;
        color: #ffed83;
        height: 30px;
        border-radius: 5px;
        border: none;
        margin-top: 40px;
        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #0f4c81;
            box-shadow: 3px 3px 10px 1px #000, 0 0 1px rgba(0, 0, 0, .5) inset;
        }
    }

`

export const FormField = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
`