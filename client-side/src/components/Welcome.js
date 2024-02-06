import React from 'react'

const Welcome = () => {
    return (
        <section className='welcome_'>
            <lord-icon
                src="https://cdn.lordicon.com/gqjpawbc.json"
                trigger="hover"
                style={{
                    width: "150px",
                    height: "150px",
                    color: "blue",
                    "--primary-color": "#121331",
                    "--secondary-color": "#fa4d6d"
                }}
                className="icon_"
            >
            </lord-icon>
            <h1>
                Hey,<span>umar👋</span>
            </h1>
            <p>Let's start your airbnb journey by booking your first place.</p>
            <button>Start Booking</button>
        </section>
    )
}

export default Welcome;