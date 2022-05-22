import AuthNav from "./AuthNav"
import Navigation from "./Navigation"
import UserMenu from "./UserMenu.jsx/UserMenu"
import { Header } from "styles/AppBar.styled"

const AppBar = () => {
    const isLogedIn = false

    return <Header>
        <Navigation/>
        {isLogedIn ? <UserMenu/> : <AuthNav/>}
    </Header>
}

export default AppBar