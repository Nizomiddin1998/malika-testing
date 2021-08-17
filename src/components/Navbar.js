import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

function Navbar() {
    return (
        <div className={'container Navbar'}>
            <div className={'logo'}>
                <h1><Link to={'/'}>LOGO</Link></h1>
            </div>
            <nav className={'nav-menu'}>
                <ul>
                    <li><Link to={'/#'}>Home</Link></li>
                    <li><Link to={'/#'}>Services</Link></li>
                    <li><Link to={'/#'}>About</Link></li>

                    <li className={'drop-down'}><Link to={'/#'}>Drop down</Link>
                        <ul className={'drop-down-1'}>
                            <li><Link to={'/#'}>Drop down 1</Link></li>
                            <li><Link to={'/#'}>Drop down 2</Link></li>
                            <li className={'drop-down1'}><Link to={'/#'}>Drop Down 3</Link>
                                <ul className={'drop-down-2'}>
                                    <li><Link to={'/#'}>Deep Drop Down 1</Link></li>
                                    <li><Link to={'/#'}>Deep Drop Down 2</Link></li>
                                    <li><Link to={'/#'}>Deep Drop Down 3</Link></li>
                                    <li><Link to={'/#'}>Deep Drop Down 4</Link></li>
                                    <li><Link to={'/#'}>Deep Drop Down 5</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'/#'}>Drop down 4</Link></li>
                        </ul>
                    </li>
                    <li><Link to={'/#'}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;