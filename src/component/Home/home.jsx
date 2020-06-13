import React, { Component } from 'react';
import './home.css';
import food1 from '../../assets/home/meal.png';
// import 
import food2 from '../../assets/home/meal3.jpg';
import food3 from '../../assets/home/meal2.jpg';
import foodScroll1 from '../../assets/home/foodScroll1.jpg';
import foodScroll2 from '../../assets/home/foodScroll2.jpg';
import foodScroll3 from '../../assets/home/foodScroll3.jpg';
import foodScroll4 from '../../assets/home/foodScroll4.jpg';
import foodScroll5 from '../../assets/home/foodScroll5.jpg';

export default class home extends Component {
    render() {
        return (
            <div className="container">
                <h2>Popular Pick</h2>
                <hr className="" />
                <div className="row1">
                    <div className="col food">
                        <div className="meal">
                            <img src={food1} alt="" />
                        </div>
                        <p className="placeholder"> Published by <span>papi</span></p>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium odio cumque eaque quidem sunt, qui labore blanditiis a quibusdam itaque minus harum alias voluptatibus incidunt? Excepturi corporis adipisci, nulla inventore sed ut perferendis cumque totam natus iusto quasi voluptatum aut dolor reprehenderit quibusdam saepe doloremque delectus! Dolores eveniet aliquid tempora.</h4>
                    </div>
                    <div className="col food">
                        <div className="meal">
                            <img src={food2} alt="" />
                        </div>
                        <p className="placeholder"> Published by <span>papi</span></p>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium odio cumque eaque quidem sunt, qui labore blanditiis a quibusdam itaque minus harum alias voluptatibus incidunt? Excepturi corporis adipisci, nulla inventore sed ut perferendis cumque totam natus iusto quasi voluptatum aut dolor reprehenderit quibusdam saepe doloremque delectus! Dolores eveniet aliquid tempora.</h4>

                    </div>
                    <div className="col food">
                        <div className="meal">
                            <img src={food3} alt="" />
                        </div>
                        <p className="placeholder"> Published by <span>papi</span></p>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium odio cumque eaque quidem sunt, qui labore blanditiis a quibusdam itaque minus harum alias voluptatibus incidunt? Excepturi corporis adipisci, nulla inventore sed ut perferendis cumque totam natus iusto quasi voluptatum aut dolor reprehenderit quibusdam saepe doloremque delectus! Dolores eveniet aliquid tempora.</h4>
                    </div>
                </div>
                <div className='row2'>
                    <div className="col food">
                        <div className="meal">
                            <img src={foodScroll1} alt="" />
                        </div>
                        <p>Burger & Chips</p>
                        <p>Price: $45</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="col food">
                        <div className="meal">
                            <img src={foodScroll2} alt="" />
                        </div>
                        <p>Pasta & Shredded Vegie</p>
                        <p>Price: $55</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="col food">
                        <div className="meal">
                            <img src={foodScroll3} alt="" />
                        </div>
                        <p>Pancakes With Fruit Toppings</p>
                        <p>Price: $76</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="col food">
                        <div className="meal">
                            <img src={foodScroll4} alt="" />
                        </div>
                        <p>Strawberry Cake</p>
                        <p>Price: $135</p>
                        <button>Buy Now</button>
                    </div>
                    <div className="col food">
                        <div className="meal">
                            <img src={foodScroll5} alt="" />
                        </div>
                        <p>Chicken Pizza</p>
                        <p>Price: $125</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}
