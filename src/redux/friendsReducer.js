import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
    filter: '' 
}


const profilesSlice = createSlice({
  // Ім'я слайсу
  name: "friends",
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addProfile(state, action) {
        state.friends.push(action.payload)
    },
    removeProfile(state, action) {
        state.friends = state.friends.filter(friend => friend.id !== action.payload)
    },
    setProfile(state, action) {
        state.filter = action.payload
    },
  },
});

// Генератори екшенів
export const { addProfile, removeProfile, setProfile } = profilesSlice.actions;
// Редюсер слайсу
export const profilesReducer = profilesSlice.reducer

// export const friendsReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'friends/addFriend': {
//             return {...state, friends: [...state.friends, action.payload]}
//         }
//         case 'friends/removeFriend': {
//             return {...state, friends: state.friends.filter(friend => friend.id !== action.payload)}
//         }
//         case 'friends/setFilter': {
//             return {...state, filter: action.payload}
//         }
//         default: {
//             return state
//         }
//     }
// }

// export const addProfile = (payload) => {
//     return {
//         type: 'friends/addFriend',
//         payload
//     }
// }

// export const removeProfile = (payload) => {
//     return {
//         type: 'friends/removeFriend',
//         payload
//     }
// }

// export const setProfile = (payload) => {
//     return {
//         type: 'friends/setFilter',
//         payload
//     }
// }