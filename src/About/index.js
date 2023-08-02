import React from "react";
import LinkedIN from "../images/linkedIn.png";
import Github from "../images/github.png";
import Twitter from "../images/twitter.png";
import "./styles.scss";
import useCheckPlatform from "../hooks/useCheckPlatform";

export default function About() {
  const isMobile = useCheckPlatform();
  return (
    <div className="OuterContainer">
      <div className={isMobile ? "MobileContent" : "Content"}>
        <p>
          A dedicated Web Developer with a strong focus on frontend development,
          proficient in crafting engaging and user-friendly websites and web
          applications. Committed to ensuring the frontend excellence
          contributes significantly to the overall success of the final product.
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
        <div className={isMobile ? "MobileElement" : "Element"}>Redux</div>
      </div>
    </div>
  );
}
