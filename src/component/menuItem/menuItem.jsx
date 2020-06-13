import React, { Component } from 'react';
import './menuItem.css';
import { productStore, userStore, loginStore } from '../../store'

export default class menuItem extends Component {
    state = {
        quantity: 1,
        product: this.props.meal

    }
    componentDidMount() {
        let comp=[];
         productStore.getState().map(d=>{
            const propsMeal= this.props.meal.filter((e)=>e.id!==d.id)
            const trap=this.props.meal.filter(e=>e.id===d.id);
            trap.forEach((d)=>d.checked=true)
            comp=[...trap,...propsMeal].sort((a,b)=>b.rating-a.rating)
        })
        if(!productStore.getState()[0]){
            this.setState({
                product:this.props.meal
        })}else {
            this.setState({
                product:[...comp]
            })
        }
    }
    count = 0
    rate(d) {
        let counter = [];
        while (this.count < d.rating) {
            counter.push(this.count)
            this.count++;
        }
        if (this.count === d.rating) {
            this.count = 0
        }
        return counter
    }
    addCart = (e, d) => {
        if (userStore.getState()[0]) {
            if (!productStore.getState().filter(f => f.id === d.id)[0]) {
                productStore.dispatch({
                    type: 'addProduct', payload: {
                        product: d
                    }
                });
            }
            e.target.previousSibling.previousSibling.style.display='block'
            e.target.nextSibling.nextSibling.style.display = "block"
            e.target.style.display = 'none'
        } else {
            loginStore.dispatch({type:'show'})
        }
    }
    removeFromCart = (e, d) => {
        d.checked=false;
        productStore.dispatch({
            type: 'removeProduct',
            payload: {
                product: d
            }
        });
        e.target.previousSibling.previousSibling.previousSibling.previousSibling.style.display='none'
        e.target.previousSibling.previousSibling.style.display = 'block'
        e.target.style.display = 'none';
    }
    addCount = (e, d) => {
        e.preventDefault();
        if (parseInt(e.target.previousSibling.innerHTML) === 10) {
            return;
        }
        productStore.dispatch({ type: 'addCountProduct', payload: { product: d } })
        e.target.previousSibling.innerHTML = productStore.getState().filter(f => f.id === d.id)[0].count
    }
    subCount = (e, d) => {
        e.preventDefault();
        if (parseInt(e.target.nextSibling.innerHTML) === 1) {
            return;
        }
        productStore.dispatch({ type: 'subCountProduct', payload: { product: d } })
        e.target.nextSibling.innerHTML = productStore.getState().filter(f => f.id === d.id)[0].count
    }
    check(d){
        if(d.checked){
        return  <p className="quantity">Qty: <a onClick={(e) => this.subCount(e, d)} href='/' className='sub'>-</a><span className='count'>{d.count}</span><a href='/' className='add' onClick={(e) => this.addCount(e, d)}>+</a></p>
        } else {
            return <p style={{display:'none'}}   className="quantity">Qty: <a onClick={(e) => this.subCount(e, d)} href='/' className='sub'>-</a><span className='count'>1</span><a href='/' className='add' onClick={(e) => this.addCount(e, d)}>+</a></p>

        }
    }
    checkButton(d){
        if(d.checked){
            return <React.Fragment><button style={{ display: 'none' }} onClick={(e) => this.addCart(e, d)}>Add To Cart</button> <button style={{color:'rgb(243, 107, 107)',backgroundColor:'#222222'}} onClick={(e) => this.removeFromCart(e, d)}>Remove</button></React.Fragment>
        } else {
            return <React.Fragment><button onClick={(e) => this.addCart(e, d)}>Add To Cart</button> <button style={{ display: 'none',color:'rgb(243, 107, 107)', backgroundColor:'#222222' }} onClick={(e) => this.removeFromCart(e, d)}>Remove</button></React.Fragment>  
        }
    }
    render() {
        return (
            <div className='menu'>
                <ul className='item'>
                    {this.state.product.map(d => <li key={d.id}>
                        <p className='itemType'>{d.type}</p>
                        <p className="itemPrice">{'$' + d.price}</p>
                        {this.check(d)}
                        <div id='rating'>
                            <div className='itemRating'>
                                {this.rate(d).map((d) => <span key={d} className="ats"></span>)}
                            </div>
                            <div className="placeholder">
                                <span className="box abs"></span>
                                <span className="box abs"></span>
                                <span className="box abs"></span>
                                <span className="box abs"></span>
                                <span className="box abs"></span>
                            </div>
                        </div>
                        {this.checkButton(d)}
                    </li>)}
                </ul>
            </div>
        )
    }
}
