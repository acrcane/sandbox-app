

const initialState = {
    friends: JSON.parse(localStorage.getItem('friends')) ?? [],
    filter: '' 
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'friends/addFriend': {
            return {...state, friends: [...state.friends, action.payload]}
        }
        case 'friends/removeFriend': {
            return {...state, friends: state.friends.filter(friend => friend.id !== action.payload)}
        }
        case 'friends/setFilter': {
            return {...state, filter: action.payload}
        }
        default: {
            return state
        }
    }
}