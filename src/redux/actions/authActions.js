import API from "../../utils/API"

export const signup = (user,history) => {
    return dispatch => {
        API.signup(user)
        .then(data =>{
            dispatch({type:'AUTH_SUCCESSFUL', payload:{loggedIn: data.logged_in, currentUser: data.user}})
            history.push('/');
        }).catch(error=>{
            history.push("/error")
        })
    }
}

export const login = (user,history) => {
    return dispatch => {
        API.login(user)
        .then(data =>{
            dispatch({type:'AUTH_SUCCESSFUL', payload:{loggedIn: data.logged_in, currentUser: data.user}});
            history.push('/');
        }).catch(error=>{
            history.push("/error")
        })
    }
}

export const checkLoggedIn = () => {
    return dispatch => {
        API.checkLoginStatus()
        .then(data =>{
            dispatch({type:'AUTH_SUCCESSFUL', payload:{loggedIn: data.logged_in, currentUser: data.user}});
        })
    }
}

export const logout = (dispatch) => {
        API.logout()
        .then(data =>{
            dispatch({type:'LOGOUT'});
        })
}

export const changeUser = (user) => {
    return  {type:'CHANGE_USERNAME', currentUser: user};
}