import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import s from "./Login.module.css"
import Container from '../component/Container'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { useLazyLoginQuery } from '../features/auth/authApi'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()
    const [login, {isFetching}] = useLazyLoginQuery()
    const dispath = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const result = await login({email, password})
        if (result.data?.length) {
            dispath(setUser(result.data[0]))
            navigate("/")
        } else {
            setError("Invalid credentials")
        }
    }

    return (
        <div className={s.login}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.loginForm}>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={s.group}>
                                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' required />
                            </div>
                            <div className={s.group}>
                                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' required />
                            </div>
                            <button type="submit" className={s.btn} disabled={isFetching}>Login</button>
                            <Link className={s.btn} to="/register">Register</Link>
                            {error && <p>{error}</p>}
                        </form>
                    </div>

                </div>
            </Container>
        </div>
    )
}
export default Login