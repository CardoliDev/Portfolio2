import Experience from "./componentes/experience/page";
import Header from "./componentes/header/page";
import Info from "./componentes/information/information";

import "./styles/home.scss";
import "./componentes/experience/page"
import EmailIcon from "./componentes/icons/Email/page";
import SocialBtns from "./componentes/social-btns/page";


export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:matcardolidev@gmail.com
">Contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
