import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import footerImg from './Assets/white1.jpg';

const Twitter = <FontAwesomeIcon icon={faTwitter} />;
const Instagram = <FontAwesomeIcon icon={faInstagram} />;
const Discord = <FontAwesomeIcon icon={faDiscord} />;

function Footer() {
    return (
        <div id="footer" className="Footer">

            <div id="footer-container" className="footerContainer">
                <div id="title-container" className="titleContainer">
                    <div id="footer-title"><strong>ABORTIES</strong></div>
                    <div id="copyright">COPYRIGHT 2022 BLOQQLABS ⓒ</div>
                </div>
                    <img id="footer-logo" src={footerImg} alt="footer-logo" />
                <div id="footer-content" className="footerContent">
                    <a className="footerLink" href="www.google.com">STORY</a>
                    <a className="footerLink" href="www.google.com">GALLERY</a>
                    <a className="footerLink" href="www.google.com">CONTACT</a>
                    <a className="footerLink" href="www.google.com">TERMS OF SERVICE</a>
                    <div id="footer-socials" className="footerSocials">
                        <a class="socials-button" target="blank" href="www.twitter.com">{Twitter}</a>
                        <a class="socials-button" target="blank" href="www.instagram.com">{Instagram}</a>
                        <a class="socials-button" target="blank" href="www.discord.com">{Discord}</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;