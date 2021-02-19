import {API_ROOT} from "./apiRoot"
export default {
    getUsers: function () {
        return fetch(`${API_ROOT}/users`)
        .then((res) => res.json())

    },
    getUser: function (id) {
        return fetch(`${API_ROOT}/users/${id}`)
        .then((res) => res.json())
    },
    recommendVideos: function(){
        return fetch(`${API_ROOT}/recommendvideos`, {
            method: 'get',
            headers: {'Content-Type':'application/json'}
           })
        .then((res) => res.json())
    },
    checkLoginStatus: function(){
        return fetch(`${API_ROOT}/logged_in`,{
            credentials: 'include'
          }).then(resp => resp.json())
    },
    login: function(user){
        return fetch(`${API_ROOT}/sessions`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user:user})
        })
        .then(resp => resp.json())
    },
    logout: function(){
        return fetch(`${API_ROOT}/logout`,{
            method: 'DELETE',
            credentials: 'include'
          }).then(resp => resp.json())
    },
    signup:function(user){
        return fetch(`${API_ROOT}/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user:user})
        })
        .then(resp => resp.json())
    },
    getSubscriptions: function(id){
        return fetch(`${API_ROOT}/users/${id}/subscriptions`,{
            credentials: 'include'
          }).then(resp => resp.json())
    },
    getSubscribers: function(id){
        return fetch(`${API_ROOT}/users/${id}/subscribers`,{
            credentials: 'include'
          }).then(resp => resp.json())
    },
    getVideos: function(id){
        return fetch(`${API_ROOT}/users/${id}/videos`,{
            credentials: 'include'
          }).then(resp => resp.json())
    },
    getVideo: function(id){
        return fetch(`${API_ROOT}/videos/${id}`,{
            credentials: 'include'
          }).then(resp => resp.json())
    },
    subscribe: function(id,sub_id){
        return fetch(`${API_ROOT}/users/${id}/subscriptions`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({creator_id: id, sub_id: sub_id})
        })
        .then(resp => resp.json())
    },
    unsubscribe: function(id,sub_id){
        return fetch(`${API_ROOT}/users/${id}/subscriptions`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ sub_id: sub_id})
        })
        .then(resp => resp.json())
    },
    addViews: function(id){
        return fetch(`${API_ROOT}/videos/${id}/views`,{
            method: 'PUT',
            credentials: 'include'
          }).then(resp => resp.json())
    },
    check_liked_video: function(video_id){
        return fetch(`${API_ROOT}/videos/${video_id}/liked_video`,{
            credentials: 'include'
        })
        .then(resp => resp.json())
    },
    updatelikeVideo: function(video_id,like_video_id, obj){
        return fetch(`${API_ROOT}/videos/${video_id}/videolikes/${like_video_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
    },
    addComment: function(user_id,video_id,comment){
        return fetch(`${API_ROOT}/users/${user_id}/videos/${video_id}/comments`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({comment: comment})
        })
        .then(resp => resp.json())
    },
    getComments: function(video_id){
        return fetch(`${API_ROOT}/videos/${video_id}/comments`,{
            credentials: 'include',
        })
        .then(resp => resp.json())
    },
    checkSubscription: function(user_id){
        return fetch(`${API_ROOT}/users/${user_id}/checksubscription`,{
            credentials: 'include',
        })
        .then(resp => resp.json())
    }
};