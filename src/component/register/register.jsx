import React, { Component } from 'react';
import { usersStore, userStore } from '../../store'
import './register.css'

export default class register extends Component {
    state = {
        toggler: true,
        user: {
            username: '',
            email: '',
            city: '',
            zipCode: '',
            password: ''
        }
    }
    componentDidMount() {
        document.getElementById('username').focus();
    }
    focus = (e) => {
        let label = document.getElementsByTagName('label')
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = ''
        }
        e.target.previousSibling.previousSibling.style.color = 'white';
    };
    showPass = (e) => {
        e.preventDefault();
        this.setState({
            toggler: !this.state.toggler
        })
        if (this.state.toggler) {
            e.target.previousSibling.type = 'text';
            e.target.innerText = 'hide'
        } else {
            e.target.innerText = 'show'
            e.target.previousSibling.type = 'password';
        }
    }
    onchange = (e) => {
        if (e.target.type === 'select') {
            this.setState({
                user: {
                    ...this.state.user,
                    city: e.target.options[e.target.selectedIndex].value
                }

            })
        }
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }
    submit = (e) => {
        e.preventDefault();
        const user = { ...this.state.user }
        for (let propes in user) {
            if (user[propes] === '') {
                console.log('complete all fields'); return;
            }

        }
        user.id='';
        usersStore.dispatch({
            type: 'addUser',
            payload: {
                newUser:user
            }
        })
        userStore.dispatch({
            type: 'validateUser',
            payload:{
                user,
                users:usersStore.getState()
            }
        })
        this.props.history.push('/menu')

    }
    checkUser=()=>{
        console.log(usersStore.getState())
    }


    render() {

        return (
            <div>
                <div className="regContainer">
                    <div className="form">
                        <h2>Sign Up</h2>
                        <p>Get limited offers and promos with a 50% discount on orders placed within your first week</p>
                        <form onSubmit={this.submit}>
                            <div className="name">
                                <label htmlFor="name">Username</label><br />
                                <input type="text" onFocus={this.focus} onChange={this.onchange} name="username" id="username" value={this.state.user.username} />
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label><br />
                                <input type="text" value={this.state.user.email} placeholder="example@domain.abc" onChange={this.onchange} onFocus={this.focus} name="email" id="email" />
                            </div>
                            <div className="city">
                                <select name="city" onChange={this.onchange} id="city">
                                    <option value="">Select your city</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="abuja">Abuja</option>
                                    <option value="ibadan">Ibadan</option>
                                    <option value="kano">Kano</option>
                                    <option value="enugu">Enugu</option>
                                    <option value="port Harcourt">Port Harcourt</option>
                                </select>
                            </div>
                            <div className="zipCode">
                                <label htmlFor="zipCode">ZipCode</label><br />
                                <input type="text" value={this.state.user.zipCode} onChange={this.onchange} placeholder="123443" onFocus={this.focus} name="zipCode" id="zipCode" />
                            </div>
                            <div className="password">
                                <label htmlFor="password">Password</label><br />
                                <input type="password" value={this.state.user.password} onChange={this.onchange} onFocus={this.focus} name="password" id="password" />
                                <a onClick={this.showPass} href="/">show</a>
                            </div>
                            <div className="submit">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
