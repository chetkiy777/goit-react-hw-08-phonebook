import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import authOperations from "redux/auth/auth-operations"
import { FormContainer, FormField } from "styles/Global.styled"

export const LoginPage = () => {



    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setEmail('')
        setPassword('')
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(authOperations.logIn({ email, password}))
        setEmail('')
        setPassword('') 
    }
    

    return(
        <div>
            

            <FormContainer onSubmit={handleSubmit}>
                <h3>Вход в систему:</h3>
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
                

                <button>Вход</button>
            </FormContainer>
        </div>
    )
}