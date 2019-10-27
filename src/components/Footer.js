import React from "react";
import { SmallCase } from "../components/SmallCase";

export const Footer = () => {
  return (
    <div className="footer">
      <SmallCase
        location="/CaseOne"
        backgroundColor="#f2f2f2"
        title="Stay comfortable"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        button="Go to stay comfortable"
      />

      <SmallCase
        location="/CaseOne"
        backgroundColor="#f2f2f2"
        title="Prioritize both your eyes and your back"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        button="Go to stay comfortable"
      />

      <SmallCase
        location="/CaseOne"
        backgroundColor="#f2f2f2"
        title="Healthier eyes"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
        button="Go to stay comfortable"
      />
    </div>
  );
};
