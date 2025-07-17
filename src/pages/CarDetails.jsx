import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import s from './CarDetails.module.css'
import Container from '../component/Container'

const CarDetails = () => {
  const [car, setCar] = useState([])
  const {id} = useParams()
console.log(car)
  useEffect(() => {
    const getCar = async () => {
      await fetch("http://localhost:8800/cars").then(r => r.json()).then(data => setCar(data[0]))
    }
    getCar()
  }, [id])

  return (
    <div className={s.details}>
      <Container>
       <div className={s.hero} style={{backgroundImage: `url("${car.img}")`}}>
        <img className={s.img} src={car.logo} alt="" />
        <h1 className={s.heading}>{car.name}</h1>
       </div>
      </Container>
    </div>
  )
}

export default CarDetails