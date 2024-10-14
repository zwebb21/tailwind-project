// Card.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ onClick }) => {
  return (
    <div id="welcome-card"  className="card text-center bg-dark text-white">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary" onClick={onClick}>Go somewhere</a>
      </div>
      <div className="card-footer text">2 days ago</div>
    </div>
  );
};

export default Card;
