import { UserMenuContainer } from "./UserMenu.styled"
import { useDispatch } from "react-redux"
import { authOperations } from "redux/auth-operations"

const UserMenu = ({username}) => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(authOperations.logOut)
    }

    return <UserMenuContainer>
        <img alt="" width="32"/>
        <span>Добро Пожаловать {username}</span>
        <button onClick={() => logout}>Выйти</button>
    </UserMenuContainer>
}

export default UserMenu