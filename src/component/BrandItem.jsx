import React from 'react'
import { Link } from 'react-router'
import s from "./BrandItem.module.css"

const BrandItem = ({ link, logo, name }) => {
    return (
        <div className={s.brand}>
            <Link to={link}>
                <img className={s.img} src={logo} alt={name} />
                <span className={s.name}>{name}</span>
            </Link>
        </div>
    )
}

export default BrandItem