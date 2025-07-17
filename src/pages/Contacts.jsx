import React, { useState } from 'react'
import Container from '../component/Container'
import s from './Contacts.module.css'
import { useNavigate } from 'react-router'
import { useContactMutation } from '../features/users/usersApi'


const Contacts = () => {
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const [contact, { isFetching }] = useContactMutation()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await contact(email).unwrap()
      navigate("/thankyou")
    }

    catch (e) {
      setError(e)
    }

  }
  return (
    <div>
      <Container>
        <div className={s.heading}>
          <div className={s.img} style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/02/11/30/96/360_F_211309661_3AB6liBo23vt6tdmt8Tg4R0qnQCPFdD8.jpg")` }}>
            <h2 className={s.title}>Write Your contact information here</h2>
          </div>
        </div>
        <div className={s.content}>
          <form onSubmit={handleSubmit}>
            <div className={s.group}>
              <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' required />
            </div>

            <button type="submit" className={s.btn} disabled={isFetching}>Send</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Contacts