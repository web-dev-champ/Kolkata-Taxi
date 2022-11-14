import React from "react"
import Icon from "./images/Icon.jpg"
import "./style.css"
import bigimg from "./images/kolkata taxi Website logo.jpg"
import Cardser1 from "./Cardser1"
import Cardser2 from "./Cardser2"
import Cardser3 from "./Cardser3"
import Ev1 from "./Ev1"
import Cardfleet1 from "./Cardfleet1"
import Cardfleet2 from "./Cardfleet2"
import Cardfleet3 from  "./Cardfleet3"
import Footing from "./Footing"



export default function Navi()
{
    return(
        
        <div className="Body">
            <div className="starterblock">
                <div className="sbfirst">
                    <img src={Icon} className="logo"/>
                    <h4 className="sub1">KOLKATA TAXI SERVICES</h4>
                    <p className="sub1" id="tag"><small>Your Transportation Specialists</small></p>
                </div>
                <nav className="navibar">
                    <a className="navilink" href="#">Home</a>      
                    <a className="navilink" href="#servicesoffered">Our Services</a>
                    <a className="navilink" href="#Eventing">Events</a>
                    <a className="navilink" href="#">FAQ</a>
                    <a className="navilink" href="#About">About</a>
                    <a className="navilink" href="#Contact">Contact</a>
                    <a className="navilink" href="#Fleet">Fleet</a>
                    <a className="navilink" href="#">Login/Signup</a>
                </nav>
            </div>
            <div className="Herofront">
                <img className="Bigpic" src={bigimg} />
                <div>
                    <h1 className="Bigtitle"><u>KOLKATA TAXI SERVICES:</u></h1>
                    <h1 className="Bigtitle" id="TRANS">TRANSPORTATION SERVICES YOU NEED</h1>
                </div>    
                <div className="Ini">
                    <h1 className="IniHead">Getting You Where You Need To Go</h1>
                    <p className="IniPara">At KOLKATA TAXI SERVICES, our goal is to provide professional and affordable transportation services across the local Kolkata area. Our fully managed, trustworthy service allows you to spend more time on what’s important to you. Just leave the rest to us. We know Kolkata inside and out insuring you can sit back, relax, and rely on us to get you where you need to go.</p>
                    <button className="IniBtn" ><a href="mailto: abc135359@gmail.com" target="_blank"><b>Contact Us</b></a></button>
                </div>
            </div>
            <div className="yel">
                <div className="overview" id="About">
                    <h1>GET TO KNOW US</h1>
                    <p>Looking for a top-notch Taxi Service? Allow us to introduce ourselves. We're KOLKATA TAXI SERVICES and our team of pros are available whenever you need us. We don't just meet your expectations, we surpass them. KOLKATA TAXI SERVICES serves the needs of residents in Kolkata and the surrounding area. Since 2000, our company has been committed to being the best at what we do. See a full list of our services below.KOLKATA TAXI SERVICES has been offering quality Taxi Service since 2000. Great service begins with great people and real experience, which is why we put so much into choosing the best people to join our team. You'll always have a driver who knows punctuality, safe driving, and customer service inside and out. We aim to not only meet your needs, but also exceed your expectations of what a transportation service can be. We are proud to offer our services to clients throughout Kolkata area</p>
                    <button className="Lmbtn"><a href="https://api.whatsapp.com/send?phone=916289947113" target="_blank"><b>WhatsApp Us</b></a></button>
                </div>
            </div>

            <div className="Services" id="servicesoffered">
                <Cardser1 />
                <Cardser2 />
                <Cardser3 />

            </div>
            <div className="Eventing" id='Eventing'>
                <Ev1 />
            </div>
            <div className="Sm">
                <h1 className="Smh">LEARN ABOUT OUR FLEET</h1>
                <h4 className="Smsm">A Great Selection of Vehicles</h4>
            </div>
            <div className="Fleet" id="Fleet">
                <Cardfleet1 />
                <Cardfleet2 />
                <Cardfleet3 />
            </div>
            <div className="Contact" id='contact'>
                <section class="letsconnect" id="letsconnect">
                    <h1 className="LgLab1">Let's Connect</h1>
                    <form class="formGroup">
                        <label>Name :</label>
                        <input type="text" placeholder="Enter Your Name" required />
                        <br />
                        <label>Email : </label>
                        <input type="text" placeholder="Enter Your Email ID" required />
                        <br />
                        <label>Message :</label>
                        <br />
                        <textarea
                        rows="6"
                        cols="60"
                        placeholder="Please Leave A Message"
                        required
                        ></textarea>

                        <br />
                        <input type="submit" class="submitButton" />
                    </form>
                </section>
            </div>

            <div>
                <Footing />
            </div>

        </div>    
    )    
}

