import React from 'react';
import portal from '../../assets/portal.png';
import './loader.css';

export default function Loader() {
  return (
    <div className='loaderContainer'>
        <img src={portal} alt="loader" className='spinnerLoader'/>
    </div>
  )
}
