export default function navReducer(
    state = {
        toggleNavbar: true
    },
    action
  ) {
    switch (action.type) {
        case 'CHANGE_TOGGLENAVBAR':{
            return {...state, toggleNavbar: !state.toggleNavbar};
        }
        default:
            return state;
    }
  }