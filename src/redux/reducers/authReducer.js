export default (state = {loggedin: false, currentUser: {}}, action)=>{
    switch(action.type){
        case 'AUTH_SUCCESSFUL':{
            return{
                ...state,
                loggedIn: action.payload.loggedIn, currentUser: action.payload.currentUser
            }
        }

        case 'LOGOUT':{
            return{
                ...state,
                loggedIn: false, currentUser: {}
            }
        }
        case 'CHANGE_USERNAME':{
            return{
                ...state,
                currentUser: action.currentUser
            }
        }
        default:
            return state;
    }
}