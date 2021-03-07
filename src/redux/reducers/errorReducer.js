export default (state = {connection:false}, action)=>{
    switch(action.type){
        case 'CONNECTION':{
            return{
                connection: action.connection
            }
        }
        default:
            return state;
    }
}