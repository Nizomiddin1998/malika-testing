import React from 'react';
import './style.css'
import Carusel from "./Carusel";
import FadeAnimation from "./FadeAnimation";
import CounterUp from "./CountUp";

function Header() {
    return (
        <div className={'header'}>
            <div className={'slider'}>
                <Carusel/>
            </div>
            <div className={'animation'}>
                <FadeAnimation/>
            </div>
            <div>
                <CounterUp/>
            </div>
        </div>
    );
}

export default Header;