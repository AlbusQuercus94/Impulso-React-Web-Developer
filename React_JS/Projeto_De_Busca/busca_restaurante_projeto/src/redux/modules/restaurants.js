export const Types = {
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
    SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
};

const initialState = {
    restaurants:[],
    restaurantsSelected: null,

};

export default function reducer(state= initialState, action){
    switch (action.type){
        case Types.SET_RESTAURANTS:
            return {...state, setRestaurants: action.payload}
            break
        
        case Types.SET_RESTAURANT:
            return {...state, setRestaurant: action.payload }

        default:
            return state
            break
    }

}

export function setRestaurants(restaurants){
    return{
        type: 'Types.SET_RESTAURANTS',
        payload: restaurants
    }
}

export function setRestaurant(restaurant){
    return{
        type: 'Types.SET_RESTAURANT',
        payload: restaurant,
    }
}