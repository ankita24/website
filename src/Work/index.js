import React from "react";
import { experiences } from "../constants";

import useCheckPlatform from "../hooks/useCheckPlatform";
import "./styles.scss";

export default function Work() {
  const isMobile = useCheckPlatform();
  return (
    <div className={isMobile ? "MobileWorkContainer" : "WorkContainer"}>
      <div className="WorkHeader">
        <p>Work Experience</p>
        <div className="hr" />
      </div>
      <div className="WorkOuterContainer">
        {experiences.map((item) => {
          return (
            <div className={isMobile ? "MobileWorkFlexBox" : "WorkFlexBox"}>
              <img className="WorkLogo" src={item.logo} alt={item.company} />
              <div className="WorkElement">
                <b>{item.company}</b>
                <p>{item.designation}</p>
                <i>{item.time_period}</i>
                <ul>
                  {item.work.map((i) => (
                    <li
                      className={isMobile ? "MobileWorkList" : "WorkList"}
                      style={{ marginTop: 8 }}
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
