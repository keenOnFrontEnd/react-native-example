import { FETCH_DATA } from "../types"


const initialState = {
    photos: []
}


export const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
        return {
            ...state,
            photos: action.payload
        }
        
        default: return state;
    }
}
