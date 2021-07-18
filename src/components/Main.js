import React from 'react'
import '../App.css'
import {Button } from './Button';
import './Main.css'


function Main() {
    return (
        <div className='hero-container'>
            <video src="/videos/Globe - 55317.mp4"
            autoPlay loop muted></video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Get Started</Button>
                 <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default Main
