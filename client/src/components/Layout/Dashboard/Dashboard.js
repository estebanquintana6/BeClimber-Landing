import React from 'react';

import {
    AboutElement,
    AboutElementTitle,
    HeaderCenteredBox,
    MainHeader,
    MoreServicesSection,
    MoreInfoSection,
    Logo
} from './Dashboard.styles';

import About from '../About/About'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import LargeImageSection from '../LargeImageSection/LargeImageSection'

import { useIsMobile } from '../../../utils/breakpointUtils'
import { useHistory } from "react-router-dom"

const Dashboard = () => {
    const isMobile = useIsMobile()
    const history = useHistory()

    const toGallery = () => {
        history.push("/gallery");
      }

    return (
        <>
            <MainHeader src={'/static/img/background.jpg'}>
                <HeaderCenteredBox>
                    <Logo src={'/static/img/logo.png'}></Logo>
                </HeaderCenteredBox>
            </MainHeader>
            <About />
            <LargeImageSection src={isMobile ?
                '/static/img/about-2.jpeg' :
                '/static/img/large-image.jpeg'} />
            <MoreInfoSection>
                <MoreServicesSection>
                    <AboutElement 
                    left src={'/static/img/img8.jpeg'}
                    onClick={toGallery}>
                        <AboutElementTitle>Galería</AboutElementTitle>
                    </AboutElement>
                    <AboutElement right src={'/static/img/us.jpeg'}>
                        <AboutElementTitle>Más servicios</AboutElementTitle>
                    </AboutElement>
                </MoreServicesSection>
            </MoreInfoSection>
            <ContactForm />
            <Footer />
        </>
    );
};

export default Dashboard