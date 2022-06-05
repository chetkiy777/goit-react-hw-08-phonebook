import { NavLinkStyled } from "styles/Global.styled"

const AuthNav = () => {
    return <div>
        <NavLinkStyled to="/register">
            Регистрация
        </NavLinkStyled>

        <NavLinkStyled to="/login">
            Вход
        </NavLinkStyled>
        
    </div>
}

export default AuthNav