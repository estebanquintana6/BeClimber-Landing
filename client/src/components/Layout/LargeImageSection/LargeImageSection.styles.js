import styled from 'styled-components'

export const LargeImageSectionWrapper = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: relative;
    width: 100%;
    height: 100vh;
`


export const FloatingButtonWrapper = styled.div`
    position: absolute;
    top: 10%;
    left: 70%;
    @media (min-width: 1024px) {
        left: 15%;
    }
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const ScheduleButton = styled.button`
    background-color: Transparent;
    outline:none;
    color: white;
    padding: 9px 14px 8px;
    width: 190px;
    height: 50px;
    border: 3px solid white;
    border-radius: 15px;    
    font-weight: bold;
    font-size: 16px;
    font-family: "DM Sans", "Roboto", "Oxygen", "Ubuntu", "Droid Sans", sans-serif;
    letter-spacing: 0;
    line-height: 1.1;
    min-width: 150px;
    text-align: center;
    text-transform: uppercase;
`