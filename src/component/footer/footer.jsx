import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { userStore, loginStore } from '../../store'
import './footer.css'

class footer extends Component {
    state = {
        searchInput: { transform: "translateY(200%)" },
        isSearch: true
    }
    onSearch = (e) => {
        e.preventDefault();
        this.setState({
            isSearch: !this.state.isSearch
        })
        if (this.state.isSearch) {
            this.setState({
                searchInput: { transform: "translateY(0%)" }
            })
        } else {
            this.setState({
                searchInput: { transform: "translateY(200%)" }
            })
        }
    }
    showUser = (e) => {
        e.preventDefault()
        if (userStore.getState()[0]) {
            this.props.history.push('/user');
        } else {
            loginStore.dispatch({
                type: 'show'
            })
            this.props.history.push('/user')
        }
    }
    render() {
        return (
            <div>
                <div className='footerHeader'>
                    <h4>Elpapi</h4>
                    <div className='footerSocial'>
                        <ul>
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-whatsapp"></i></li>
                            <li><i className="fab fa-pinterest"></i></li>
                            <li><i className="fas fa-envelope"></i></li>
                        </ul>
                    </div>
                    <div className='footerPane'>
                        <div className="col1">
                            <ul>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                        <div className="col2">
                            <ul>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                        <div className="col3">
                            <ul>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright&copy;2020</p>
                    </div>
                </div>
                <div id="yes" style={this.state.searchInput} className="searchInput">
                    <input type="text" name="" id="searchItem" /><button>search</button>
                </div>
                <div className="footer">
                    <div className="home"><Link to="/"><i className="fas fa-home"></i></Link></div>
                    <div className="search"><a href="/" onClick={this.onSearch}><i className="fas fa-search"></i></a></div>
                    <div className="category"><Link to="/menu"><i className="fas fa-th-list"></i></Link></div>
                    <div className="user"><a href="/" onClick={this.showUser}><i className="far fa-user"></i></a></div>
                </div>
            </div>
        )
    };
}

export default withRouter(footer);