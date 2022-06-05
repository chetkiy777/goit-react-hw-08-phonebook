import AuthNav from "./AuthNav"
import Navigation from "./Navigation"
import UserMenu from "./UserMenu/UserMenu"
import { useSelector } from "react-redux"
import authSelectors from "../redux/auth/auth-selectors"
import { Header } from "styles/AppBar.styled"

const AppBar = () => {
    const loggedIn = useSelector(authSelectors.getIsLoggedIn)
    const userName = useSelector(authSelectors.getUsername)

    return <Header>
        <Navigation/>
        {loggedIn ? <UserMenu username={userName}/> : <AuthNav/>}
    </Header>
}

export default AppBar