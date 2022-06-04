import { useDispatch } from "react-redux"
import { useState } from "react"
import authOperations from "redux/auth/auth-operations"
import { FormContainer, FormField } from "styles/Global.styled"

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
            <FormContainer onSubmit={handleSubmit}>
                <h3>Регистрация: </h3>
                <FormField>
                <label htmlFor="name">Имя</label>
                <input 
                    type="string"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value) }
                />
                </FormField>
                
                <FormField>
                    <label htmlFor="email">Почта</label>
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </FormField>
               
                <FormField>
                    <label htmlFor="password">Пароль</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                </FormField>
                
                <button>Регистрация</button>
            </FormContainer>
        </div>
    )
}