import { UserMenuContainer } from "./UserMenu.styled" 

const UserMenu = () => {

    const name = "Igor"
    return <UserMenuContainer>
        <img alt="" width="32"/>
        <span>Добро Пожаловать {name}</span>
        <button onClick={() => console.log(name)}>Выйти</button>
    </UserMenuContainer>
}

export default UserMenu