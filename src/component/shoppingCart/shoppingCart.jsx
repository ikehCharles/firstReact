import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './shoppingCart.css'
import { userStore, loginStore, productStore, usersStore } from '../../store';

class shoppingCart extends Component {
    state = {
        products: productStore.getState(),
        total: 0,
        count: 0,
        elem: ''
    }
    logOut = () => {
        userStore.dispatch({
            type: 'logOut'
        })
        loginStore.dispatch({
            type: 'close'
        })
        this.props.history.push('/')
    }
    componentDidMount() {
        if (productStore.getState()[0]) {
                this.update()
            document.getElementById('totalShow').style.display = 'block';
            document.getElementById('totalHide').style.display = 'none';
        } else {
            document.getElementById('totalShow').style.display = 'none';
            document.getElementById('totalHide').style.display = 'block';
        }
        productStore.subscribe(() => {
            if (!productStore.getState()[0]) {
                if (document.getElementById('totalShow')) {
                    document.getElementById('totalShow').style.display = 'none';
                    document.getElementById('totalHide').style.display = 'block';
                }
            }
        })
    }
    removeFromCart = (e, d) => {
        d.checked = false;
        productStore.dispatch({
            type: 'removeProduct',
            payload: {
                product: d
            }
        });
        this.setState({
            products: productStore.getState()
        })
        this.update()
    }
    update() {
        let total = [];
        productStore.getState().forEach(d => {
            total.push((d.count * d.price))
        })
        let product = 0
        for (let i = 0; i < total.length; i++) {
            product += total[i];
        }
        this.setState({
            total: product
        })
    }
    addCount = (e, d) => {
        e.preventDefault();
        if (parseInt(e.target.previousSibling.innerHTML) === 10) {
            return;
        }
        productStore.dispatch({ type: 'addCountProduct', payload: { product: d } });
        e.target.previousSibling.innerHTML = productStore.getState().filter(f => f.id === d.id)[0].count
        e.target.parentElement.nextSibling.innerHTML = '$' + productStore.getState().filter(f => f.id === d.id)[0].count * productStore.getState().filter(f => f.id === d.id)[0].price;
        this.update()
    }
    subCount = (e, d) => {
        e.preventDefault();
        if (parseInt(e.target.nextSibling.innerHTML) === 1) {
            return;
        }
        productStore.dispatch({ type: 'subCountProduct', payload: { product: d } });
        e.target.nextSibling.innerHTML = productStore.getState().filter(f => f.id === d.id)[0].count
        e.target.parentElement.nextSibling.innerHTML = '$' + productStore.getState().filter(f => f.id === d.id)[0].count * productStore.getState().filter(f => f.id === d.id)[0].price;
        this.update()
    }
    clear = () => {
        productStore.dispatch({
            type: 'clearProduct'
        })
        this.setState({
            products: productStore.getState()
        })

    }
    getUser(){
        if(userStore.getState()[0]){
            return userStore.getState()[0].username
        }else {
            return 'User'
        }
    }
    navMenu=()=>{
       this.props.history.push('/menu')
    }
    render() {
        return (
            <div>
                <div className='userInfo'>Hello, {this.getUser()}</div>
                <div className='cart'>
                    <div className="cartHeader">
                        <span>Products</span>
                        <span>Quantity</span>
                        <span>Price</span>
                    </div>
                    <ul className='cartList'>
                        {this.state.products.map(d => <li key={d.id}>
                            <span className="carttype">{d.type}</span>
                            <span className="cartCount"><button className="sub" onClick={(e) => this.subCount(e, d)}>-</button><p style={{ margin: '0 5px' }}>{d.count}</p><button className="add" onClick={(e) => this.addCount(e, d)}>+</button></span>
                            <span className="cartPrice">{'$' + d.price * d.count}</span>
                            <span className="cartRemove"><button onClick={(e) => this.removeFromCart(e, d)}>remove</button></span>
                        </li>)}
                    </ul>
                    <div id='totalShow'>
                        <div className="total">
                            <span className='totalPlaceholder'>Total</span>
                            <span className='total'>{'$' + this.state.total}</span>
                            <span className='removeAll'><button onClick={this.clear}>Clear</button></span>
                        </div>
                        <div className='checkOut'>
                            <button>CheckOut</button>
                        </div>
                    </div>
                    <div id='totalHide'>
                        <h4>{this.getUser()},</h4>
                        <p>Kindly, place your order</p>
                        <button onClick={this.navMenu}>Go To Menu</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(shoppingCart);