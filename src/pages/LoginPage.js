import { useDispatch } from "react-redux"
import { useState } from "react"
import authOperations from "redux/auth/auth-operations"
import { FormContainer } from "styles/Global.styled"

export const LoginPage = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(authOperations.logIn({ email, password}))
        setEmail('')
        setPassword('') 
    }
    

    return(
        <div>
            <h1>Вход в систему:</h1>

            <FormContainer onSubmit={handleSubmit} autoComplete="off">
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

                <button>Войти</button>
            </FormContainer>
        </div>
    )
}