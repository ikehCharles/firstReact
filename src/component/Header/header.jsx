import React, { Component } from 'react';
import './header.css';
import { Link, withRouter } from 'react-router-dom';
import { userStore, usersStore,loginStore } from '../../store'

class header extends Component {
    state = {
        user: {
            email: '',
            password: ''
        },
        redirect: null,
        menu: [
            {
                type: 'menu',
                value: 'menu',
                show: true
            },
            {
                type: 'mcCafe',
                value: 'mcCafe',
                show: true
            },
            {
                type: 'about our food',
                value: 'aboutOurFood',
                show: true
            },
            {
                type: 'trending now',
                value: 'trending',
                show: true
            },
            {
                type: 'locate',
                value: 'locate',
                show: true
            }
        ],
        addBg: '',
        mobile: 'mobileMenu',
        showLogin: { transform: 'translateX(200%)' },
        showNav: { transform: 'translateX(-200%)', zIndex: -4 },
        changeBg: { backgroundColor: 'black' },
        errUser:''
    }
    isShown = false;
    isShow = (e) => {
        this.isShown = !this.isShown;
        if (this.isShown) {
            this.setState({
                mobile: "mobileMenu show",
                showNav: { transform: "translateX(0)", opacity: 1 }
            })
        } else {
            this.setState({
                mobile: "mobileMenu",
                showNav: { transform: "translateX(-100%)", opacity: 0 }
            })
        }
    }
    onClickMenu = () => {
        this.isShow();
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                this.setState({
                    addBg: 'addBg'
                })
            } else {
                this.setState({
                    addBg: ''
                })
            }
        });
        loginStore.subscribe(() => {
            if (loginStore.getState()) {
                this.setState({
                    showLogin: { transform: 'translateX(0)' }
                })
            }else {
                this.hideLogin();
            }
        })
        userStore.subscribe(()=>{
            if(userStore.getState()){
                this.hideLogin();
            }else {
                console.log(userStore.getState())
                this.setState({
                    errUser: 'Invalid details'
                })
            }
        })
    }
    isUserLogged = (e) => {
        userStore.subscribe(() => {
            if (!userStore.getState()[0]) {
                this.setState({
                    showLogin: { transform: 'translateX(0)' }
                })
            } else {
                this.props.history.push('/cart')
            }
        })
        userStore.dispatch({ type: 'isUserLoggedIn' })
    }
    hideLogin = () => {
        this.setState({
            showLogin: { transform: 'translateX(100%)' }
        })
    }
    onchange=(e)=>{
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value
            }
        })
    }
    submit=(e)=>{
        e.preventDefault();
        let user={...this.state.user};
        userStore.dispatch({
            type:'validateUser',
            payload:{
                user,
                users: usersStore.getState()
            }
        })
        userStore.subscribe(()=>{
            if(userStore.getState()){
                this.hideLogin();
            }else {
                console.log(userStore.getState())
                this.setState({
                    errUser: 'Invalid details'
                })
            }
        })
    }
    checkUser=()=>{
        this.setState({
            errUser:''
        })
    }

    render() {
        return (
            <React.Fragment>
                <header className={this.state.addBg}>
                    <div className={this.state.mobile} onClick={this.isShow}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="navbarHeader"><Link style={{color:'black',fontSize:'25px' }} to="/">Elpapi</Link><h2></h2></div>
        <div className='cartButton' onClick={this.isUserLogged}><span>{this.props.count}</span><i style={{ fontSize: "28px", margin: "20px 22px", color: 'black' }} className="fas fa-shopping-cart"></i></div>
                </header>
                <nav style={this.state.showNav} className="navbarMenu">
                    <ul>
                        {this.state.menu.map((m) => (<li key={m.value}><Link onClick={this.onClickMenu} to={"/" + m.value} >{m.type}</Link></li>))}
                    </ul>
                </nav>
                <div style={this.state.showLogin} className="login">
                    <h1 onClick={this.hideLogin}>x</h1>
                    <h4>Oops, You need to sign in..</h4>
                    <form onSubmit={this.submit}>
                        <div className="username">
                            <label htmlFor="email">email</label><br />
                            <input type="email" onKeyDown={this.checkUser} onChange={this.onchange} placeholder="example@domain.abc" name="email" id="emailL" value={this.state.user.email} />
                        </div>
                        <div className="password">
                            <label htmlFor="password">password</label><br />
                            <input onKeyDown={this.checkUser} type="password" onChange={this.onchange} name="password" id="passwordL" value={this.state.user.password} />
                        </div>
                        <div className="submit">
                            <button type='submit'>Submit</button>
                        </div>
        <div className='err'>{this.state.errUser}</div>
                        <div className="userQuery">
                            <p><a href="/">Forgot Password?</a></p>
                            <h4><Link className="link" onClick={this.hideLogin} to="/register">Sign Up</Link></h4>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(header);