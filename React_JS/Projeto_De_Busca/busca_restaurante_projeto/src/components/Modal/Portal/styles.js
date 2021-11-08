import styled from "styled-components";

export const Overlay = styled.div`
    align-items: center;
    backdrop-filter: blur(5px);
    background-color: rgba(78, 89, 131, 0.5)
    bottom: 0;
    display: flex;
    height:100%;
    left:0;
    justify-content: center;
    position: fixed;
    right:0;
    top: 0;
    width: 100%;
    z-index: 1000;
`

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100%-144px);
    height: 50px;
    width: 500px;
    background-color: #fff;
    box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
    border-radius: 8px;
`