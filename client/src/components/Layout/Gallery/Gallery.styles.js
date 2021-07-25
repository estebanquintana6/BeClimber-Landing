import styled from 'styled-components'

export const MainHeader = styled.div`
height: 100vh;
background-image: url(${props => props.src});
@media (max-width: 1024px) {
    background-position-x: -560px;
}
background-repeat: no-repeat;
background-size: cover;
background-position: top;
position: relative;
z-index: 0;
&:hover,
&:focus {
  color: palevioletred;
}
&:before {
    background: rgba(0, 0, 0, 0.5);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}
`
