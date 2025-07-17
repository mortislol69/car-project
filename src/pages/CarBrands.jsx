import React, { useEffect, useState } from 'react'
import s from './CarBrands.module.css'
import Container from '../component/Container'
import BrandItem from '../component/BrandItem'
import { useGetCarsQuery } from '../features/cars/carsApi'


const CarBrands = () => {
const {data: brands} = useGetCarsQuery()

  return (
    <div className = {s.carBrands}>
        <Container>
        <div className={s.wrapper}>
            <h1 className={s.header}>
                All car brands
            </h1>
            <div className={s.grid}>
                {
                    brands && brands.map(brand => {
                        return <BrandItem link={`/carDetails/${brand.id}`} name={brand.name} logo={brand.logo}/>
                    })
                }
            </div>
        </div>
        </Container>
    </div>
  )
}

export default CarBrands