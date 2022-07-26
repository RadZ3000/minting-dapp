import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import headerImg from './Assets/white1.jpg';

const Twitter = <FontAwesomeIcon icon={faTwitter} />;
const Instagram = <FontAwesomeIcon icon={faInstagram} />;
const Discord = <FontAwesomeIcon icon={faDiscord} />;

function Header() {
    return (
        <header className="Header">

            <img id="header-logo" src={headerImg} alt="header-logo" />
            <div id="links" className="links">
                <a class="nav-links" href="#Nav-Link">STORY</a>
                <a class="nav-links" href="#Nav-Link">ROADMAP</a>
                <a class="nav-links" href="#Mav-Link">GALLERY</a>
                <a class="nav-links" href="#Nav-Link">TEAM</a>
                <a class="nav-links" href="#Nav-Link">NAV LINK</a>
            </div>
            <div id="socials-div" className="socials-div">
                <a class="socials-button" target="blank" href="www.twitter.com">{Twitter}</a>
                <a class="socials-button" target="blank" href="www.instagram.com">{Instagram}</a>
                <a class="socials-button" target="blank" href="www.discord.com">{Discord}</a>
                {/* <button className="Button">Button</button>
                <button className="Button">Button</button>
                <button className="Button">Button</button> */}
            </div>

            <div id="connect-div" className="connect-div">
                <button id="Connect">MINT NOW</button>
            </div>

        </header>
    )
}

export default Header;