import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header/header';
import Home from './component/Home/home';
import Footer from './component/footer/footer';
import Menu from './component/Menu/menu';
import Register from './component/register/register';
import ShoppingCart from './component/shoppingCart/shoppingCart';
import User from './component/user/user';
import Item from './component/menuItem/menuItem';
import {meals} from './component/Menu/meals';
import { productStore } from './store';
import mcCafe from './component/mcCafe/mcCafe';
import aboutOurFood from './component/aboutOurFood/aboutOurFood';
import trending from './component/trending/trending';
import locate from './component/locate/locate'

class App extends Component {

  state= {
    counter:1,
    toMenuItem: false,
    meal: []
  }
  count=(e,f)=>{
    console.log(e,f)
    this.setState({
      counter: this.state.counter+1
    })
  }
  meal=(e,cat)=>{
    e.preventDefault();
    if(cat==='all') return this.setState({
      meal: meals.sort((a,b)=>b.rating-a.rating)
    })
    return this.setState({
      meal:meals.filter(d=>d.category===cat).sort((a,b)=>b.rating-a.rating)
    });
     
  }
  componentDidMount(){
    productStore.subscribe(()=>{
      this.setState({
        count:productStore.getState().length===0?'':productStore.getState().length
        })
      })
    
  }
  
  
  render() {
    return (
      <Router>
     <React.Fragment>
     <Header count={this.state.count} />
      <div className='container-wrapper'>
      <Route exact path="/" render={props=>(<Home />)} />
      <Route path="/menu"  render={(props)=><Menu  meal={this.meal} />} />
      <Route path="/register" component={Register} />
      <Route path="/cart" component={ShoppingCart} />
      <Route path="/user" component={User} />
      <Route path="/menuItem"  render={(props)=><Item meal={this.state.meal} />} />
      <Route path="/mcCafe"  component={mcCafe}/>
      <Route path="/aboutOurFood"  component={aboutOurFood}/>
      <Route path="/trending"  component={trending}/>
      <Route path="/locate"  component={locate}/>
      </div>
      <Footer />
     </React.Fragment>
     </Router>
    )
  }
}

export default App;
