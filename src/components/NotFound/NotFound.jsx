import React from 'react';
import './NotFound.css';
import titlenf from '../../assets/titlenf.png';

export default function NotFound() {
  return (
    <div className='notFound'>
      <img src={titlenf} alt='not found' className='imgNF'/>
    </div>
  )
}
