import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import s from './Register.module.css'
import Container from '../component/Container'
import { useGetUserQuery, useRegisterMutation } from '../features/auth/authApi'

const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [register, { isFetching }] = useRegisterMutation()
    const { data } = useGetUserQuery(username)
    const [error, setError] = useState()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (data.length > 0) {
            setError(`User with email <${data[0].username}> already exists`)
            return
        }
        try {
            await register({ username, password }).unwrap()
            navigate("/login")
        }

        catch (e) {
            setError(e)
        }
    }

    return (
        <div className={s.register}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.registerForm}>
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={s.group}>
                                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='Username' required />
                            </div>
                            <div className={s.group}>
                                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' required />
                            </div>
                            <button type="submit" className={s.btn} disabled={isFetching}>Register</button>
                            <Link className={s.btn} to="/login">Login</Link>
                            {error && <p>{error}</p>}
                        </form>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Register