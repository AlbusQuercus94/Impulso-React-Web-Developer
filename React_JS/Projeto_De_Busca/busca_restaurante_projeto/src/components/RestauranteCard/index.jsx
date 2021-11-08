import React from "react";
import ReactStars from 'react-rating-stars-component'
import restaurante from "../../assets/restaurante-fake.png"

import * as Style from './styles'

const RestaurantCard = () => {
    return(
        <Style.Restaurant>
            <Style.RestaurantInfo>
                <Style.Title>Restaurant's Name</Style.Title>
                <ReactStars 
                activeColor={'purple'}
                count={5}
                edit={false}
                isHalf
                value={4}
                />
                <Style.Adress>Street, Num 150</Style.Adress>
            </Style.RestaurantInfo>
            <Style.RestaurantImage src={restaurante} alt={`Restaurant's image`}/>
        </Style.Restaurant>
    )
}

export default RestaurantCard