import styled from "@emotion/styled";

export const ContactsListBlock = styled.ul`
    margin: 0;
    padding: 0;
`

export const ContactsListItem = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 15px;

    span {
        margin-left: 8px;
    }
    
    div {
        display: inline-block;
        
        button {
            border-radius: 50%;
            border: none;
            color: red;
            margin-left: 5px;
        }
    }
    
`