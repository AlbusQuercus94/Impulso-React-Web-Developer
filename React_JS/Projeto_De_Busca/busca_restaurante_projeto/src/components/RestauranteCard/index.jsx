import React from "react";
import ReactStars from 'react-rating-stars-component'
import restaurante from "../../assets/restaurante-fake.png"

import * as Style from './styles'

const RestaurantCard = ({restaurant, onClick}) => {
    return(
        <Style.Restaurant onClick={onClick}>
            <Style.RestaurantInfo>
                <Style.Title>{restaurant.name}</Style.Title>
                <ReactStars 
                activeColor={'purple'}
                count={5}
                edit={false}
                isHalf
                value={restaurant.rating}
                />
                <Style.Adress>{restaurant.vicinity || restaurant.formatted_address}</Style.Adress>
            </Style.RestaurantInfo>
            <Style.RestaurantImage src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant } alt={`Restaurant's image`}/>
        </Style.Restaurant>
    )
}

export default RestaurantCard