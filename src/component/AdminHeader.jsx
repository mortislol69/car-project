import React from 'react'
import { Link } from 'react-router'
import s from "./Header.module.css"

const AdminHeader = () => {
  return (
    <li className={s.listItem}>
      <Link className={`${s.link} ${s.active}`} to="/createbrand">Create Brand</Link>
    </li>
  )
}

export default AdminHeader

