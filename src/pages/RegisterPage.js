import { useDispatch } from "react-redux"
import { useState } from "react"
import authOperations from "redux/auth/auth-operations"
import { FormContainer } from "styles/Global.styled"

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(authOperations.register({name, email, password}))
        setName('')
        setEmail('')
        setPassword('')
    }
    

    return(
        <div>
            <h1>Регистрация: </h1>

            <FormContainer onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input 
                        type="string"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value) }
                    />
                </label>

                <label>
                    Почта:
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </label>

                <label>
                    Пароль:
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                </label>
                <button>Регистрация</button>
            </FormContainer>
        </div>
    )
}