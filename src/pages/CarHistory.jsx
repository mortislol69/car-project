import React from 'react'
import s from "./CarHistory.module.css"
import Container from '../component/Container'

const CarHistory = () => {
    return (
        <div>

            <Container>

                <div className={s.whenMade}>
                    <div className={s.img} style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWXX21XeC1q05jrx2koxlTRQCDQ05ZIF-gA&s")` }}>
                        <h2 className={s.question1}>The history of cars</h2>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.wrap}>
                        <div className={s.answer}>
                            <h2>The first truly modern, practical, and commercially viable automobile, powered by a gasoline engine, was invented in 1886. This car, known as the Benz Patent-Motorwagen, was developed by Karl Benz, and it's often considered the birth of the automobile.
                            </h2>
                        </div>
                        <div className={s.question2}>
                            <h2>How did they make cars and with what?</h2>
                            <p>nternal Combustion Engine:
                                The Benz Patent-Motorwagen was powered by a four-stroke internal combustion engine.
                                Three-Wheeled Design:
                                It had three wheels, a single front wheel and two rear wheels.
                                Practicality:
                                While not as fast or flashy as modern cars, it was a working vehicle that could transport people.
                                Production:
                                Benz's company produced the Patent-Motorwagen in 1885 and later in 1893, with a four-wheeled version.
                                Impact:
                                Benz's car was a significant step towards the development of the modern automobile and paved the way for other manufacturers to explore internal combustion engine technology, according to SlashGear.
                                Before Benz:
                                Steam-powered vehicles: There were earlier attempts at self-propelled vehicles, including steam-powered tricycles like the one built by Nicolas-Joseph Cugnot in 1769.
                                Electric carriages: Robert Anderson also invented an early electric carriage.
                                Other inventors: Leonardo da Vinci, Ferdinand Verbiest, and others explored different designs for early vehicles.
                                History of the American Automobile - Cole's Collision Center
                                In short, while there were earlier attempts at self-propelled vehicles, the Benz Patent-Motorwagen is widely credited as the first practical car, paving the way for the mass production of automobiles.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default CarHistory