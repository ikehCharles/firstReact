export  function usersReducer(state=[], action){
    if(action.type==='addUser'){
        const isTaken= state.find((d)=>d.email===action.payload.newUser.email)
        if(isTaken){
            return state;
        }else {
            return [...state, action.payload.newUser];
        }
         
    }
    else {
        return state;
    }
}

export function userReducer(state=[], action){
    if(action.type==="userActive"){
        return [...action.payload.user];
    }
    else if(action.type==='validateUser'){
        if(action.payload.users.find(d=>d.email===action.payload.user.email)){
            if(action.payload.users.find(d=>d.password===action.payload.user.password)){
                return [...state,action.payload.user];
            }
            else {
                return false;
            }
        } else {
            return false
        }
    }
    else if(action.type==='isUserLoggedIn'){
        if(state) {return state}else {return false}
    }
    else if(action.type==='logOut') {
        return [];
    }else {
        return state;
    }
}
export function loginComponent(state=null, action){
    if(action.type==='show'){
        return true
    } else {
        return false
    }
}

export function productReducer(state=[],action){
    if(action.type==='addProduct'){
        return [...state,action.payload.product];
    }
    else if(action.type==='addCountProduct'){
        const product=state.filter((d)=>d.id===action.payload.product.id)[0];
        product.count=product.count+1;
        return [...state.filter((d)=>d.id!==action.payload.product.id),product]
    }
    else if(action.type==='subCountProduct'){
        const product=state.filter((d)=>d.id===action.payload.product.id)[0];
        product.count=product.count-1;
        return [...state.filter((d)=>d.id!==action.payload.product.id),product]
    }
    else if(action.type==='removeProduct'){
        return [...state.filter(d=>d.id!==action.payload.product.id)];
    }
    else if(action.type==='clearProduct'){
        state.forEach((d)=>{
            d.checked=false
        })
        return [];
    }
    else {
        return state;
    }
}