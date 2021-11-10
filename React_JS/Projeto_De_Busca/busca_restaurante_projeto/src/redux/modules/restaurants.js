export const Types = {
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
    SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
}

const initialState = {};

export default function reducer(state= initialState, action){
    switch (actions.type){
        case Types.SET_RESTAURANTS:
            return {...state, setRestaurants: action.payload}
            break
        
        case Types.SET_RESTAURANT:
            return {...state, setRestaurant: action.payload }

        default:
            break
    }

}

export function setRestaurants(){
    return{
        type: 'Types.SET_RESTAURANTS',
    }
}