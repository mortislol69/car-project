import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import s from "./CreateBrand.module.css"
import Container from '../component/Container'

const CreateBrand = () => {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
        name: "",
        logo: "",
        img: "",
        desc: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setFormdata({
            ...formdata,
            [name]: value
        })
    }
    const handleSubmit = async () => {
        const res = await fetch("http://localhost:8800/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        })
        if (res.ok) {
            navigate("/success")
        }


    }
    return (
        <div className={s.main}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.form}>
                        <h2>Create Brand</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={s.group}>
                                <input type="text" name='name' onChange={handleChange} placeholder='Brand Name' />
                            </div>
                            <div className={s.group}>
                                <input type="text" name='logo' onChange={handleChange} placeholder='Brand Logo' />
                            </div>
                            <div className={s.group}>
                                <input type="text" name='img' onChange={handleChange} placeholder='Brand Image' />
                            </div>
                            <div className={s.group}>
                                <textarea name='desc' rows={5} onChange={handleChange} placeholder='Description of brand'></textarea>
                            </div>
                            
                            
                            
                            <button className={s.btn} type='submit'>Create</button>
                        </form>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default CreateBrand