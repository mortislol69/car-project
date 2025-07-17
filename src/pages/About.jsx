import React from 'react'
import s from './About.module.css'
import Container from '../component/Container'

const About = () => {
  return (
    <div>
      <Container>
        <div className="heading">
          <div className={s.img} style={{ backgroundImage: `url("https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg")` }}>
            <h2 className={s.title}>About This Project</h2>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.wrap}>
            <div className={s.section}>
              <h2>What this project is about</h2>
              <p>This project is a website that has informations about car details, car brands, and the history of cars.</p>
            </div>
            <div className={s.section}>
              <h2>Why did I make it?</h2>
              <p>I made this for my coding class and because I like cars.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About