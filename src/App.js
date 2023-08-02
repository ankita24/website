import potrait from  "./images/potrait_pink.png";
import resumePDF from "./resume.pdf";
import useCheckPlatform from "./hooks/useCheckPlatform";
import "./App.scss";
import Work from "./Work";
import { useRef } from "react";
import About from "./About";

function App() {
  const isMobile = useCheckPlatform();
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <div className="App" ref={aboutRef}>
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
          <div
            className="hover-underline-animation"
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </div>
          <div
            className="hover-underline-animation"
            onClick={() =>
              workRef.current?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
              })
            }
          >
            Work Experience
          </div>
          <a
            style={{ textDecoration: "none" }}
            className="hover-underline-animation"
            href={resumePDF}
            without
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="hover-underline-animation"
            href="mailto:riya.ankita24@gmail.com"
          >
            Contact
          </a>
        </div>
      </div>
      <About />
      <div ref={workRef}>
        <Work />
      </div>
    </div>
  );
}

export default App;
