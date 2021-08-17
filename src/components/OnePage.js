import React from 'react';
import Navbar from "./Navbar";
import './style.css'
import Header from "./Header";

function OnePage() {
    return (
        <div>
            <nav id={'nav'}>
                <Navbar/>
            </nav>
            <header>
                <Header/>
            </header>
        </div>
    );
}

export default OnePage;