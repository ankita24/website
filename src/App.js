import potrait from "./potrait_pink.png";
import LinkedIN from "./linkedIn.png";
import Github from "./github.png";
import Twitter from "./twitter.png";
import useCheckPlatform from "./hooks/useCheckPlatform";
import "./App.scss";

function App() {
  const isMobile = useCheckPlatform();
  return (
    <div className="App">
      <div className={isMobile ? "MobileContainer" : "Container"}>
        <div className="TitleBox">
          <img
            src={potrait}
            style={{ width: isMobile ? 40 : 80, height: isMobile ? 40 : 80 }}
            alt="Ankita"
          />
          {!isMobile && <p className="Title">Ankita Panigrahi</p>}
        </div>
        <div
          className={
            isMobile ? "MobileContainer MobileNavbar" : "Container Navbar"
          }
        >
          <div class="hover-underline-animation">Work Experience</div>
          <div class="hover-underline-animation">Download Resume</div>
          <div class="hover-underline-animation">Hobbies</div>
          <div class="hover-underline-animation">Contact</div>
        </div>
      </div>
      <div className={isMobile ? "MobileContent" : "Content"}>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div className={isMobile ? "MobileSocials" : "Socials"}>
        <a
          href="https://www.linkedin.com/in/ankita-panigrahi-4654917a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIN} alt="linkedIn" />
        </a>
        <a href="https://github.com/ankita24" target="_blank" rel="noreferrer">
          <img src={Github} alt="github" />
        </a>
        <a
          href="https://twitter.com/ankita24_riya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="twitter" />
        </a>
      </div>

      <div className={isMobile ? "MobileFlexBox" : "FlexBox"}>
        <div className={isMobile ? "MobileElement" : "Element"}>ReactJS</div>
        <div className="Dot" />
        <div className={isMobile ? "MobileElement" : "Element"}>Javascript</div>
        <div className="Dot" />
        <div className={isMobile ? "MobileElement" : "Element"}>HTML</div>
        <div className="Dot" />
        <div className={isMobile ? "MobileElement" : "Element"}>CSS</div>
        <div className="Dot" />
        <div className={isMobile ? "MobileElement" : "Element"}>Typescript</div>
        <div className="Dot" />
        <div className={isMobile ? "MobileElement" : "Element"}>NextJS</div>
        <div className="Dot" />
        <div className={isMobile ? "MobileElement" : "Element"}>Git</div>
      </div>
    </div>
  );
}

export default App;
