import styled from "@emotion/styled";

export const AddContactForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 200px;

    label {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 600;
    }

    input {         
        margin-top: 5px;
        border-radius: 3px;
        border: none;
        
    }

    button {
        display: block;
        font-weight: bold;
        font-size: 14px;
        background-color: #fff;
        color: #000;
        height: 24px;
        border-radius: 5px;
        border: none;
        margin-top: 20px;
        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #0f4c81;
            box-shadow: 3px 3px 10px 1px #000, 0 0 1px rgba(0, 0, 0, .5) inset;
        }
    }
`

export const ContactFormSubmitButton = styled.button`
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 3px;
    display: inline-block;
    height: 20px;
    width: 90px;
`