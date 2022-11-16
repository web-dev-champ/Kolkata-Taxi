import React from 'react';
import './style.css'
import Navig from './Navig';
import Footing from './Footing';
import ValidatePassword from './ValidatePassword';
import WrongPassAlert from './WrongPassAlert';

export default function Signup()
{
    return(
        <div className="Contact" id='contact'>
                <Navig />
                <section class="letsconnect" id="letsconnect">
                    <h1 className="LgLab1">Let's Connect</h1>
                    <form class="formGroup">
                        <label>Name :</label>
                        <input type="text" placeholder="Enter Your Name" required />
                        <br />
                        <label>Email : </label>
                        <input type="email" placeholder="Enter Your Email ID" required />
                        <br />
                        <label>Password :</label>
                        <br />
                        <input id="pass" type="password" placeholder="Enter a new Password" required />
                        <label>Confirm Password :</label>
                        <br />
                        <input id="confirm_pass" type="password" placeholder="Retype the Password" required onkeyup={ValidatePassword} />
                        <br />
                        <span id="wrong_pass_alert"></span>
                        <br />
                        <input type="submit" class="submitButton" onclick={WrongPassAlert}/>
                    </form>
                </section>
                <Footing />
            </div>
    )
}

