import React, { useState } from 'react'
import Container from '../component/Container'
import s from "./Profile.module.css"
import { editProfile } from '../features/api'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const { id, firstname, lastname, email, password } = user
  const [formData, setFormData] = useState({
    firstname,
    lastname,
    email,
    password
  })


  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await editProfile(formData, id)
    if(res.ok){
      alert("Profile info successfully changed.")
    }
  }
  return (
    <div className={s.profile}>
      <Container>
        <div className={s.wrapper}>
          <form className={s.grid} onSubmit={handleSubmit}>
            <h2>Welcome back, {firstname}</h2>

            <div className={s.group}>
              <input type="text" name="firstname" placeholder="Change First Name" value={formData.firstname} onChange={handleChange} />
            </div>
            <div className={s.group}>
              <input type="text" name="lastname" placeholder="Change Last Name" value={formData.lastname} onChange={handleChange} />
            </div>
            <div className={s.group}>
              <input type="text" name="email" placeholder="Change Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className={s.group}>
              <input type="password" name="password" placeholder="Change your password" value={formData.password} onChange={handleChange} />
            </div>
            <button type='submit' className={s.save}>Save</button>

          </form>
        </div>
      </Container>
    </div>
  )
}

export default Profile