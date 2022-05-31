import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: white;
    margin-right: 10px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

    label {
        margin-top: 20px;
        

        input {
            width: 200px;
            margin-left: 10px;
        }
    }

    button {
        display: block;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        margin-top: 20px;
    }
`