import React from 'react'
import '../App.css';
import postre from './media/postre.png';
export const Trabajos = () => {
  return (
    <div className='section-trabajos'>
        <h2 className='title-trabajos'>TRABAJOS</h2>
        <figure className='trabajos-imgs'>
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        <img src={postre} />
        </figure>
    </div>
  )
}
