import React from 'react'
import '../App.css';
import repostera from './media/repostera.jpg';
export const Nosotros = () => {
    return (
        <div className='section-nosotros'>
            <div className='nosotros-content'>
                <img className='respotera-img' src={repostera} />
                <div className='nosotros-history'>
                    <h1 className='nosotros-title'>NOSOTROS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula nisi ac justo tincidunt, quis ultrices sapien pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sit amet risus eget ligula facilisis auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vehicula tristique turpis, sed bibendum lacus luctus ac. </p>
                </div>
            </div>
        </div>
    )
}
