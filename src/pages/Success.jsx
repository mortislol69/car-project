import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Success = () => {
    const [seconds, setSeconds] = useState(5)
    const navigate = useNavigate()
    useEffect(() => {
        if(seconds === 0){
            navigate("/carbrands")
        }
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer)
    }, [seconds, navigate])



    return (
        <div>
            <h1>You successfully made your brand! Congratulations!</h1>
            <button onClick={() => navigate("/carbrands")}>Click to go back to Car brands</button>
        </div>
    )
}

export default Success