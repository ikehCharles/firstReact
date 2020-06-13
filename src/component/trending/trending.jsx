import React from 'react';
import './trending.css'
import trendingBg from '../../assets/trending/trending1.jpg';
import trending1 from '../../assets/trending/trending2.jpg';
import trending2 from '../../assets/trending/trending3.jpg';

export default function Trending() {
    return (
        <div>
            <div className='trendingHeader'>
                <h1>Trending Now</h1>
                <hr />
            </div>
            <div className='trendingCTO'>
                <img src={trendingBg} alt="" />
            </div>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea!</h4>
            <div className='trendingRow'>
                <div className='trendingCol'>
                    <div className='imgPlaceholder'>
                        <img src={trending1} alt="" />
                    </div>
                </div>
                <div className='trendingCol'>
                    <div className='trendingBody'>
                        <h2>Lorem Ipsum Dolor</h2>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae non, veritatis assumenda consequatur inventore?</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, nisi.</p>
                    </div>
                </div>
            </div>
            <div className='trendingRow'>
                <div className='trendingCol'>
                    <div className='imgPlaceholder'>
                        <img src={trending2} alt="" />
                    </div>
                </div>
                <div className='trendingCol'>
                    <div className='trendingBody'>
                        <h2>Lorem Ipsum Dolor</h2>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae non, veritatis assumenda consequatur inventore?</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}