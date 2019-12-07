import React from 'react';
import './badgeshowcase.scss';

export default function BadgeShowcase() {
  return (
    <div className="badge-showcase">
      <div className="each-medal">
        <i className="fas fa-medal silver icon-1"></i>
        <p>Foodie</p>
      </div>
      <div className="each-medal">
        <i className="fas fa-medal bronze icon-2"></i>
        <p>Food buster</p>
      </div>
      <div className="each-medal">
        <i className="fas fa-medal gold icon-3"></i>
        <p>Food God</p>
      </div>
    </div>
  );
}

