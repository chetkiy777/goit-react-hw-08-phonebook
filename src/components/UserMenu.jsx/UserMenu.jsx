import { UserMenuContainer } from "./UserMenu.styled"
import { useDispatch, useSelector } from "react-redux"
import authOperations from "redux/auth-operations"
import authSelectors from "redux/auth-selectors"

const UserMenu = () => {

    const username = useSelector(authSelectors.getUsername)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(authOperations.logOut())
    }

    return <UserMenuContainer>
        <img alt="" width="32"/>
        <span>Добро Пожаловать {username}</span>
        <button onClick={() => logout}>Выйти</button>
    </UserMenuContainer>
}

export default UserMenu