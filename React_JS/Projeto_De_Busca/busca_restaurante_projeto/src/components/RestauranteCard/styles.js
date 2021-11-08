import styled from "styled-components";

export const Restaurant = styled.div`
    background-color: #fff;
    border-left: 5px solid transparent;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding: 16px;
    :hover{
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`

export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;

`

export const RestaurantImage = styled.img`
    background-color: red;
    border-radius: 10%;
    height: 100px;
    justify-content: center;
    object-fit: cover;
    width: 100px;
`

export const Title = styled.span`
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin-bottom: 10px;
`

export const Adress = styled.span`
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 18px;
    line-height: 19px;
    margin-bottom: 10px;
    margin-top: 10px;
`