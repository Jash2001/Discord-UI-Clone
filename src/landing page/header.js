import React from 'react';
import discordlogo from "../assets/discord_mini_icon.svg";
import leftlandingpagebg from "../assets/left_bg_landing_header.svg";
import rightlandingpagebg from "../assets/right_bg_landing_header.svg";
import inviteonlylanding from "../assets/invite_only_landing.svg";
import hangoutlanding from "../assets/hanging_out_easy_landing.svg";
import fandomlanding from "../assets/fandom_landing.svg";
import chillinglanding from "../assets/just_chiling_landing.svg";
import starslanding from "../assets/tiny_stars_landing.svg";
import usaflag from "../assets/usa_flag.png";
import twittericon from "../assets/twitter_icon.svg";
import instagramicon from "../assets/instagram_icon.svg";
import facebookicon from "../assets/facebook_icon.svg";
import youtubeicon from "../assets/youtube_icon.svg";
import './headerstyle.css';

function Header(){
    // let history = Navigate();
  
    // const handleRoute = () =>{ 
    // history("/Login");
//   }
    
    return(
        <div> 
            <div className="cover-page">
                <div className="header">  
                    <div className="navbar">
                        <ul> 
                            <div className="discord"> <img src={discordlogo} id="discord-logo" alt="discord logo"/> 
                            <p> Discord </p></div>
                            <ul>
                            <li> <a href="#"> Download </a> </li>
                            <li> <a href="#"> Nitro </a> </li>
                            <li> <a href="#"> Safety </a> </li>
                            <li> <a href="#"> Support </a> </li>
                            <li> <a href="#"> Blog </a> </li>
                            <li> <a href="#"> Careers </a> </li></ul>
                            <li> <button className="login"> Login </button> </li> 
                        </ul>
                    </div>
                    
                    <div className="cover-content"> 
                        <h1> IMAGINE A PLACE...</h1>
                        <p className="p1" align='center'> ...where you can belong to a school club, a gaming group, or a worldwide art community. 
                            <br/> <br/> Where just you and a handful of friends can spend time together. A place that makes it easy 
                            <br/> <br/> to talk every day and hang out more often.</p>
                        <div className="buttons">
                            <button className="mac"> Download for MAC </button>
                            <button className="browser"> Open Discord in your browser </button>
                        </div>
                    </div>
                
                </div>
                <div className="left-right-bg">
                    <img src={leftlandingpagebg} id="left-bgimage" alt="left img" />
                    <img src={rightlandingpagebg} id="right-bgimage" alt="right img" />
                </div>
            </div>

            <div className="invite">
                <div className="invite-img">
                    <img src={inviteonlylanding} id="inviteonlyimage" alt="invite" />
                    <div className="invite-content">
                        <h1 className="invite-heading"> Create an <br/> invite-only <br/> place where you <br/> belong </h1>
                        <p className="p2"> Discord servers are organized into topic-<br/>based channels where you can collaborate, <br/>
                        share, and just talk about your day without <br/>clogging up a group chat. </p>
                    </div>
                </div>
            </div>

            <div className="hanging-out">
                <div className="hang-out">
                    <div className="hang-out-content">
                        <h1 className="hang-out-heading"> Where hanging <br/> out is easy </h1>
                        <p className="p2"> Grab a seat in a voice channel when you’re <br/>free. Friends in your server can see you’re<br/>
                        around and instantly pop in to talk without<br/> having to call.</p>
                    </div>
                    <img src={hangoutlanding} id="hangoutimage" alt="hangout" />
                </div>
            </div>

            <div className="fandom">
                <div className="fandom-img">
                    <img src={fandomlanding} id="fandomimage" alt="fandom" />
                    <div className="fandom-content">
                        <h1 className="fandom-heading"> From few to a <br/> fandom </h1>
                        <p className="p2"> Get any community running with moderation<br/>tools and custom member access. Give <br/>
                        members special powers, set up private <br/>channels, and more. </p>
                    </div>
                </div>
            </div>

            <div className="chilling">
                <div className="chilling-content">
                    <h1 className="chilling-heading" align='center'> RELIABLE TECH FOR STAYING CLOSE </h1>
                    <p className="p2" align='center'> Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br/>
                    games, or gather up and have a drawing session with screen share.</p>
                    <img src={chillinglanding} id="chillingimage" alt="chilling" />
                    <div className="journey">
                        <img src={starslanding} id="starsimage" alt="stars" />
                        <h1 className="journey-heading" align='center'> Ready to start your journey? </h1>
                        <button className="journey-btn"> Download for MAC </button>
                    </div>
                </div>
            </div>

            <footer className="discord-footer">
                <div className="footer-box">
                    <div className="social-media">
                        <h1 className="footer-heading"> IMAGINE A <br/>PLACE </h1>
                        <div className="usa">
                            <img src={usaflag} id='usaflagicon' alt="usa flag"></img>
                            <p> English, USA</p>
                        </div>
                        <div className="social-media-icons">
                            <img src={twittericon} alt="twitter"></img>
                            <img src={instagramicon} alt="instagram"></img>
                            <img src={facebookicon} alt="facebook"></img>
                            <img src={youtubeicon} alt="youtube"></img>
                        </div>
                    </div>

                    <div className="product">
                        <p className="p4"> Product </p>
                        <p className="p3"> Download </p>
                        <p className="p3"> Nitro </p>
                        <p className="p3"> Status </p>
                    </div>

                    <div className="company">
                        <p className="p4"> Company </p>
                        <p className="p3"> About </p>
                        <p className="p3"> Jobs </p>
                        <p className="p3"> Branding </p>
                        <p className="p3"> Newsroom </p>
                    </div>

                    <div className="resources">
                        <p className="p4"> Resources </p>
                        <p className="p3"> College </p>
                        <p className="p3"> Support </p>
                        <p className="p3"> Safety </p>
                        <p className="p3"> Blog </p>
                        <p className="p3"> Feedback </p>
                        <p className="p3"> Developers </p>
                        <p className="p3"> StreamKit </p> 
                    </div>

                    <div className="Policies">
                        <p className="p4"> Policies </p>
                        <p className="p3"> Terms </p>
                        <p className="p3"> Privacy </p>
                        <p className="p3"> Cookie Settings </p>
                        <p className="p3"> Guidlines </p>
                        <p className="p3"> Acknowledgements </p>
                        <p className="p3"> Licenses </p>
                        <p className="p3"> Moderation </p>
                    </div>

                    <div className="discord-end">
                        <div className="discord-logo-end">
                        <img src={discordlogo} id="discord-logo" alt="discord logo"/>
                        <p className="p3"> Discord </p> </div>
                        <button className="sign-up"> Signup </button>
                    </div>
                </div>
                
            </footer>
        </div>
    );
}

export default Header;