import React from 'react';
import './style.css'
import Icon from "./images/Icon.jpg"
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navig()
{
    return(
        <div className="starterblock">
                <div className="sbfirst">
                    <img src={Icon} className="logo"/>
                    <h4 className="sub1">KOLKATA TAXI SERVICES</h4>
                    <p className="sub1" id="tag"><small>Your Transportation Specialists</small></p>
                </div>
                <nav className="navibar">
                    <Link className="navilink" to="/">Home</Link>      
                    <a className="navilink" href="#servicesoffered">Our Services</a>
                    <a className="navilink" href="#Eventing">Events</a>
                    <a className="navilink" href="#About">About</a>
                    <a className="navilink" href="#Contact">Contact</a>
                    <a className="navilink" href="#Fleet">Fleet</a>
                    <Link className="navilink" to="/Faq">FAQ</Link>
                    <Link className="navilink" to="/Signup">Signup</Link>
                </nav>
            </div>
    )
}
