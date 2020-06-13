import React from 'react';
import './mcCafe.css'
import mcCafeHeader from '../../assets/mcCafe/mccafe_hub_hero.jpg'
import mcCafe1 from '../../assets/mcCafe/mcCafe1.jpg'
import mcCafe2 from '../../assets/mcCafe/mcCafe2.jpg'
import mcCafe3 from '../../assets/mcCafe/mcCafe3.jpg'
import mcCafe4 from '../../assets/mcCafe/mcCafe4.jpg'
import mcCafe5 from '../../assets/mcCafe/mcCafe5.jpg'
import mcCafe6 from '../../assets/mcCafe/mcCafe6.jpg'
import mcCafe7 from '../../assets/mcCafe/mcCafe7.jpg'
import mcCafe8 from '../../assets/mcCafe/mcCafe8.jpg'
import mcCafe9 from '../../assets/mcCafe/mcCafe9.jpg'
import mcCafe10 from '../../assets/mcCafe/mcCafe10.jpg'

export default function mcCafe() {
    return (
        <div className='mcCafe'>
            <div className='mcHeader'>
                <h1>McCafé® Coffee, Espresso Drinks & More</h1>
            </div>
            <div className='mcHeaderDetail'>
                <img src={mcCafeHeader} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab hic harum voluptatem minus. Sunt commodi laborum, voluptate, aspernatur perferendis animi qui porro dolorum, perspiciatis natus quam doloremque sapiente mollitia?</p>
            </div>
            <div className='mcRow'>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe1} alt="" />
                        <h2>McCafé Rewards</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe2} alt="" />
                        <h2>Hot Coffee Drinks</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='mcRow'>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe3} alt="" />
                        <h2>Iced Coffee Drinks</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe4} alt="" />
                        <h2>Lattes</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='mcRow'>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe5} alt="" />
                        <h2>Frappés</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe6} alt="" />
                        <h2>Coffee Delivery</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='mcRow'>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe7} alt="" />
                        <h2>McCafé Bakery</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe8} alt="" />
                        <h2>McCafé Rewards</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='mcRow'>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe9} alt="" />
                        <h2>Full McCafé Menu</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='mcColumn'>
                    <div className='mcContent'>
                        <img src={mcCafe10} alt="" />
                        <h2>McCafé on the Go</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, libero!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

