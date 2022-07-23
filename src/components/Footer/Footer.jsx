import React from 'react';
import './Footer.css';
import perfil from '../../assets/perfil.jpg'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <hr className='line'/>
      <div className='imgProfile'>
        <img src={perfil} alt="perfil" className='perfil'/>
      </div>
        <p>William Diaz Orozco</p>
        <p>Fullstack Web Developer</p>
        <p>Copyright 2022</p>
        <hr className='line top'/>
    </div>
  )
}
