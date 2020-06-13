import React, { Component } from 'react';
import './user.css';
import { userStore, loginStore } from '../../store'

export default class user extends Component {
    state = {
        user
    }
    componentDidMount() {
        console.log(userStore.getState())
        if (!userStore.getState()[0]) {
            loginStore.dispatch({
                type: 'show'
            })
        } else {
            this.setState({
                user: userStore.getState()[0]
            })
        }
    }
    logOut=()=>{
        userStore.dispatch({
            type:'logOut'
        })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className='userDetails'>
                    <div className='name'>
                        <label htmlFor="name">Username: </label><span>{this.state.user.username}</span><br />
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email: </label><span>{this.state.user.email}</span><br />
                    </div>
                    <div className='location'>
                        <label htmlFor="location">Location: </label><span>{this.state.user.zipCode + ', ' + this.state.user.city}</span><br />
                    </div>
                    <div className='isLoggedIn'>
                        <label htmlFor="loggedIn">Logged In: </label><span>True</span>
                    </div>
                    <div className='logOut'>
                        <button onClick={this.logOut}>Log Out</button>
                    </div>
                </div>
            </div>
        )
    }
}
