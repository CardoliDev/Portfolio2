import GithubIcon from "../icons/github/page";
import InstagramIcon from "../icons/instagram/page";
import LinkedinIcon from "../icons/linkedin/page";

import "./socialbtns.scss"

export default function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/math.cardosodev/" target="hidden">
                <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/matheus-cardoso-aba863286/" target="hidden">
                <LinkedinIcon />
            </a>
            <a href="https://github.com/CardoliDev" target="hidden">
                <GithubIcon />
            </a>
        </div>
    )
};
