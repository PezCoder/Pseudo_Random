import React from 'react';
import whiteLogo from '../../../../public/images/grab-logo-white.png';
import './myHeader.scss';

export default function MyHeader() {
  return (
    <header className="my-header">
      <img className="grab-logo" src={whiteLogo} alt="logo" />
    </header>
  );
} 
