import TextField, { Input } from "@material/react-text-field/dist/index";
import MaterialIcon from "@material/react-material-icon/dist/index";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Slider from "react-slick";

import logo from "../../assets/logo.svg"
import restaurante from "../../assets/restaurante-fake.png"
import * as Component from "../../components";

import * as Style from "./styles";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants)
    const [query, setQuery] = useState(null)
    const [placeId, setPlaceId] = useState(null)
    const [modalOpened, setModalOpened] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true)
    }

    return(
        <Style.Wrapper>
            <Style.Container>
                <Style.Search>
                    <Style.Logo src={logo} alt="Logo_do_Restaurante" />
                    <TextField
                    label='Search'
                    outlined
                    // onTrailingIconSelect={() => this.setState({value: ''})}
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <Style.CarouselTitle>
                        Search Results
                    </Style.CarouselTitle>
                    <Style.Carousel {...settings}>
                    {restaurants.map((restaurant) =>
                        <Component.Card 
                        key={restaurant.place_id}
                        photo={restaurant.photos ? restaurant.photos[0] : restaurant} 
                        title={restaurant.name}/>
                    )}
                    </Style.Carousel>
                    <button onClick={() => setModalOpened(true)}>Open Modal</button>
                </Style.Search>
                {restaurants.map((restaurant) =>
                    <Component.RestaurantCard restaurant={restaurant}/>
                )}
            </Style.Container>
            <Component.Map query={query} placeId={placeId}/>
            <Component.Modal 
            open={modalOpened} 
            onClick={() => handleOpenModal(restaurants.place_id)}
            onClose={() => setModalOpened(!modalOpened)}><Style.ModalTitle>
                {restaurantSelected?.name}
            </Style.ModalTitle>
            <Style.ModalContent>
                {restaurantSelected?.formatted_phone_number}
                {restaurantSelected?.formatted_adress}
            </Style.ModalContent>
            <Style.ModalContent>
                {restaurantSelected?.opening_hours?.open_now ? "Aberto" : "Fechado"}
            </Style.ModalContent>
            </Component.Modal>
        </Style.Wrapper>
    )
}
export default Home