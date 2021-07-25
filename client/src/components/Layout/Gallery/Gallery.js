import React from 'react'

import {
    HeaderCenteredBox,
    Logo
} from '../Dashboard/Dashboard.styles';

import { MainHeader } from './Gallery.styles'

import './Gallery.css'

const Gallery = () => {

    return (
        <>
            <MainHeader src={'/static/img/background2.jpg'} id="header">
                <HeaderCenteredBox>
                    <Logo src={'/static/img/logo.png'}></Logo>
                </HeaderCenteredBox>
            </MainHeader>
            <div className="gallery">
                <div className="v-stretch">
                    <img src="/static/img/img2.jpg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img1.jpg" alt="" />
                </div>
                <div className="h-stretch">
                    <img src="/static/img/img3.jpg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img4.jpeg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img5.jpeg" alt="" />
                </div>
                <div className="v-stretch">
                    <img src="/static/img/about-2.jpeg" alt="" />
                </div>
                <div className="big-stretch">
                    <img src="/static/img/img7.jpeg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img8.jpeg" alt="" />
                </div>
                <div className="h-stretch">
                    <img src="/static/img/img6.jpeg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img9.jpeg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img10.jpeg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img12.jpeg" alt="" />
                </div>
                <div className="v-stretch">
                    <img src="/static/img/img13.jpeg" alt="" />
                </div>
                <div>
                    <img src="/static/img/img14.jpeg" alt="" />
                </div>
                <div className="big-stretch">
                    <img src="/static/img/img11.jpg" alt="" />
                </div>
                
            </div>
        </>
    )
}

export default Gallery;