import React from 'react'

const Perks = ({ perks }) => {
    console.log(perks);
    const perksArray = [
        ["fa-solid fa-mountain-sun", "park"],
        ["fa-solid fa-wifi", "wifi"],
        ["fa-solid fa-road-barrier", "entrance"],
        ["fa-solid fa-dog", "pet"],
        ["fa-solid fa-radio", "radio"],
        ["fa-solid fa-tv", "tv"]
    ];


    return (
        <div className="services_section">
            <h1>What this place offers</h1>
            <div className="services">
                {perksArray.map((perk, key) => (
                    <p key={key} style={{ display: `${perks[perk[1]] == true ? "block" : "none"}` }}>
                        <i
                            className={`${perks[perk[1]] == true ? perk[0] : "none"}`}
                        >
                        </i>
                        {perk[1]}
                    </p>
                ))}
            </div>
            <button>Show all 8 amenities</button>
        </div >
    )
}

export default Perks