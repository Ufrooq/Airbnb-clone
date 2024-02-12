import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <section className='welcome_'>
            <lord-icon
                src="https://cdn.lordicon.com/gqjpawbc.json"
                trigger="loop"
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "#fa4d6d16",
                    borderRadius: "50%",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                }}
                className="icon_"
            >
            </lord-icon>
            <h1>
                Hey, <span>umar</span>👋<br />
                Welcome to your profile
            </h1>
            <p>Let's start your airbnb journey by booking your first place.</p>
            <button onClick={() => navigate("/")}>Start Exploring<i class="fa-regular fa-compass"></i></button>
        </section>
    )
}

export default Welcome;