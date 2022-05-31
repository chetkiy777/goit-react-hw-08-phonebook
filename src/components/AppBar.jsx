import AuthNav from "./AuthNav"
import Navigation from "./Navigation"
import UserMenu from "./UserMenu.jsx/UserMenu"
import { useSelector } from "react-redux"
import authSelectors from "redux/auth-selectors"
import { Header } from "styles/AppBar.styled"
import { useEffect } from "react"

const AppBar = () => {
    const loggedIn = useSelector(authSelectors.getIsLoggedIn)
    const userName = useSelector(authSelectors.getUsername)

    useEffect(() => {
        console.log(loggedIn)
    },[loggedIn]) 

    return <Header>
        <Navigation/>
        {loggedIn ? <UserMenu username={userName}/> : <AuthNav/>}
    </Header>
}

export default AppBar