import {createStore} from 'redux';
import {usersReducer, loginComponent,productReducer} from './reducers';
import {userReducer} from './reducers'

const usersStore= createStore(usersReducer)
export {usersStore};
const userStore= createStore(userReducer);
export {userStore};
const loginStore= createStore(loginComponent)
export {loginStore};
const productStore= createStore(productReducer);
export {productStore}