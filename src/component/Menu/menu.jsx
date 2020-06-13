import React, { Component } from 'react';
import './menu.css';
import { category } from './meals'
import { withRouter } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class menu extends Component {
    state = {
        category
    }
    redirect=(e,cat)=>{
        this.props.history.push('/menuItem');
        this.props.meal(e,cat)
    }
    categorys = category
    render() {
        return (
            <div>
                <div className="sidebar">
                    <ul>
                        {this.state.category.map(d => <li key={d}><a href='/' onClick={(e)=>this.redirect(e,d)}>{d}</a></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(menu)