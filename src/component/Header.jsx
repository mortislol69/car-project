import React from 'react'
import { Link } from 'react-router'
import Container from './Container'
import s from './Header.module.css'
import defaultUserImg from "../assets/img/defaultUser.png"
import ProtectedRoute from './ProtectedRoute'
import AdminHeader from './AdminHeader'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const Header = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
   
    return (
        <div className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.logo}>Logo</div>
                    <nav className={s.nav}>

                        <ul className={s.links}>
                            <li className={s.listItem}>
                                <Link className={s.link} to="/">Home</Link>
                            </li>
                            <li className={s.listItem}>
                                <Link className={s.link} to="/carhistory">Car History</Link>
                            </li>

                            <li className={s.listItem}>
                                <Link className={s.link} to="/carbrands">Car brands</Link>
                            </li>
                            <li className={s.listItem}>
                                <Link className={s.link} to="/about">About my project</Link>
                            </li>
                            <li className={s.listItem}>
                                <Link className={s.link} to="/contacts">Contacts</Link>
                            </li>
                            <ProtectedRoute user={user}>
                                <AdminHeader />
                            </ProtectedRoute>
                        </ul>

                    </nav>
                    {
                        user
                            ? (<>
                                <div className={s.user}>
                                <Link to="/profile"><img src={user.img ? user.img : defaultUserImg} alt=""/></Link>   
                                    <button onClick={() => dispatch(logout())} className={`${s.logoutBtn} ${s.authBtn}`}>Logout</button>
                                </div>
                            </>)
                            : <Link className={`${s.loginBtn} ${s.authBtn}`} to={"/login"}>Login</Link>
                    }
                </div>
            </Container>

        </div >

    )
}

export default Header