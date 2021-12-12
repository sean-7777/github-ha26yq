import React, { Component } from 'react';
import './style.less';

const Details = ({ children }) => <div className="details">{children}</div>;

Details.Description = ({ title, children }) => (
  <>
    <h2 className="title">{title}</h2>
    <p className="description">{children}</p>
  </>
);

Details.Plan = ({ name, price, icon: { src: imgSrc, alt: imgAlt } }) => (
  <div className="plan">
    <img className="icon" src={imgSrc} alt={imgAlt || 'Icon'} />
    <div className="topbottom">
      <h3 className="name">{name}</h3>
      <span className="price">{price}</span>
    </div>
    <div id="space"></div>
    <button className="change">Change</button>
  </div>
);
export default Details;
