import React from 'react'
import '../App.css';
import banner from './media/banner.svg';

export const Banner = () => {
    return (
        <section className='section-banner'>
                <img className='banner' src={banner} alt="" />
        </section>
    )
}
