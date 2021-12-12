import React from "react";
import "./style.less";
import Details from "#/Details";

const Summary = () => (
  <div className="summary">
    <img src="/assets/illustration-hero.svg" alt="" className="hero" />
    <Details>
      <Details.Description title="Order Summary">
        You can now listen to millions of songs, audio-books, and podcasts on any device anywhere you like!
      </Details.Description>
      <Details.Plan name="Annual Plan" price="$59.99/year" icon={{ src: "/assets/icon-music.svg", alt: "" }} />
    </Details>
  </div>
);

export default Summary;
