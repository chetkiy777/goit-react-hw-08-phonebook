import { UserMenuContainer } from "./UserMenu.styled"
import { useDispatch, useSelector } from "react-redux"
import authOperations from "redux/auth/auth-operations"
import authSelectors from "redux/auth/auth-selectors"
import logo from '../../img/ava.png'

const UserMenu = () => {

    const username = useSelector(authSelectors.getUsername)
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(authOperations.logOut(token))
    }

    return <UserMenuContainer>
        <img src={logo} alt="logo"/>
        <span>Добро Пожаловать {username}</span>
        <button onClick={() => logout()}>Выйти</button>
    </UserMenuContainer>
}

export default UserMenu