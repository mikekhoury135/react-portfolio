/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import './CustomCard.css';

function CustomCard({ title, body, image }) {
  return (
    <div id="custom-card">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{body}</p>
    </div>
  );
}

export default CustomCard;
