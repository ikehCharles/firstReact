import React from 'react';
import './aboutOurFood.css'
import aboutHeader from '../../assets/aboutOurFood/aboutHeader.jpg';
import about0 from '../../assets/aboutOurFood/about0.jpg'
import about1 from '../../assets/aboutOurFood/about1.jpg'
import about2 from '../../assets/aboutOurFood/about2.jpg'
import about3 from '../../assets/aboutOurFood/about3.jpg'
import about4 from '../../assets/aboutOurFood/about4.jpg'
import about5 from '../../assets/aboutOurFood/about5.jpg'
import about6 from '../../assets/aboutOurFood/about6.jpg'
import about7 from '../../assets/aboutOurFood/about7.jpg'
import about8 from '../../assets/aboutOurFood/about8.jpg'
import about9 from '../../assets/aboutOurFood/about9.jpg'


export default function aboutOurFood() {
    return (
        <div>
            <div className='aofHeader'>
                <h1>About Our Food</h1>
                <hr />
            </div>
            <div className='aofHeaderImg'>
                <img src={aboutHeader} alt="" />
            </div>
            <div className="aofCTO">
                <h2>We're passionate about our food</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem ea quaerat consequatur corrupti autem? Dolorem, nobis asperiores incidunt hic unde libero! Neque obcaecati debitis, velit, earum sed, accusantium autem ex nobis in nam sint ipsum non saepe! Saepe aliquid vel esse eius dolore tempore unde? Obcaecati maxime culpa repudiandae.</p>
            </div>
            <div className="aofRow">
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about0} alt="" />
                        <h2>Commitment To Quality</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about1} alt="" />
                        <h2>our food, your question</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="aofRow">
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about2} alt="" />
                        <h2>what's in your food</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about3} alt="" />
                        <h2>Our food philosophy</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="aofRow">
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about4} alt="" />
                        <h2>Commitment To Quality</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about5} alt="" />
                        <h2>Nutrition Calculator</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="aofRow">
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about6} alt="" />
                        <h2>Our food experts</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about7} alt="" />
                        <h2>Varieties of choices</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="aofRow">
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about8} alt="" />
                        <h2>Fresh Groceries</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="aofColumn">
                    <div className='aofCard'>
                        <img src={about9} alt="" />
                        <h2>Happy meal Nutrition</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nobis aspernatur, ut nesciunt assumenda quisquam perferendis distinctio deserunt ex et!</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
