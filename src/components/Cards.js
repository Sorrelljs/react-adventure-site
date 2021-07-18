import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem
                        src="images/amazon-jungle-waterfall.jpeg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services" />
                          <Carditem
                        src="images/bali-island.jpeg"
                        text="Travel through the islands of Bali in a cruise"
                        label="Luxury"
                        path="/services" />

                    </ul>
                    <ul className="cards__items">
                        <Carditem
                        src="images/amazon-jungle-waterfall.jpeg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services" />
                          <Carditem
                        src="images/bali-island.jpeg"
                        text="Travel through the islands of Bali in a cruise"
                        label="Luxury"
                        path="/services" />
                          <Carditem
                        src="images/golden-temple.jpeg"
                        text="Discover India's golden temple"
                        label="Discovery"
                        path="/services" />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
