import React from "react";
import seriousImage from "../assets/serious-guy.png";
import { MessageContainer } from "../components/MessageContainer";
import { Footer } from "../components/Footer";
// import { SmallCase } from "../components/SmallCase";
// import { BigCase } from "../components/BigCase";

export const Overview = () => {
  const br = `\n`;
  return (
    <div>
      <header
        className="overview"
        style={{ backgroundImage: `url(${seriousImage})` }}
      >
        <h1>
          Precision is calculated {br}
          fascination
        </h1>
      </header>
      <MessageContainer />
      <Footer />
    </div>
  );
};

// ========
// OLD

// {
/* <SmallCase
        location="/work"
        backgroundColor="#FFFFFF"
        title="Latest"
        message="First project just published! Find out how it came 
    to be and why."
      />

      <BigCase
        location="/work"
        backgroundImage="https://bit.ly/2PcXqYE"
        title="Brief"
        message="Standardize the delivery process by delivering 
    a tool that sellers can have as support during the delivery 
    of a Volvo car to customer."
      />

      <BigCase
        location="/about"
        backgroundImage="https://bit.ly/2MFuHKq"
        title="About"
        message="Throughout my years in school I tried everything 
    from writer to illustrator with finally finding music. 
    When the time came for me to share my music, I needed a 
    website that could represent me. I found design and code."
      />

      <SmallCase
        location="/contact"
        backgroundColor="#FDD9D3"
        title="FOR INQUIRES"
        message="Click the contact button or email me and we’ll get to know each other.
    Email: niklas.ce.westman@gmail.com"
      /> */
// }
