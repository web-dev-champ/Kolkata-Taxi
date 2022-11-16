import React from 'react';
import "./style.css"
import Footing from './Footing'
import Icon from "./images/Icon.jpg"
import Sspic from "./images/Sspic.png"
import Navig from './Navig';

export default function Faq()
{
    return(
        <div className='FaqBody'>
            <Navig />
            <div className='FaqPic'><img src={Sspic} /></div>
            <div className="Ques">
                <ul className="ListQues">
                    <li >
                        <h2 className='QuHead'>I NEED TRANSPORTATION FOR A MULTI-DAY TRIP. CAN YOU HELP ME?</h2>
                        <p className='Ans'>Yes, Multiday Transport is available. If you want to go Outstaion for multiple days then Rate is <b>₹200 per hour.</b></p>
                    </li>
                    <li >
                        <h2 className='QuHead'>CAN I RESERVE YOUR SERVICE FOR OUT OF TOWN TRIPS?</h2>
                        <p className='Ans'>Yes, you can totally reserve a Taxi for going Outstation Trips and the rate is <b>₹13 per km</b> for a single trip and if you want to hire for multiple days(less than 2days) the Rate is <b>₹150 per hour.</b></p>
                    </li>
                    <li >
                        <h2 className='QuHead'>WHAT TYPE OF CERTIFICATION DO YOUR DRIVERS OBTAIN?</h2>
                        <p className='Ans'>Our Driver's are Public Transport License holders. Each of them driving in Kolkata and are in this Taxi Business for more than <b>15 years.</b></p>
                    </li>
                </ul>
            </div>
            <Footing />

        </div>
    )
}