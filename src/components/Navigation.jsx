import { NavLinkStyled } from "styles/Global.styled"

const Navigation = () => {
    return <nav>
        <NavLinkStyled to="/">
            Главная
        </NavLinkStyled>

        <NavLinkStyled to="/contacts">
            Контакты
        </NavLinkStyled>
    </nav>
}
 
export default Navigation