import React from 'react';

import {
    AboutElement,
    AboutElementTitle,
    HeaderCenteredBox,
    MainHeader,
    MoreInfoSection,
    Logo
} from './Dashboard.styles';

import About from '../About/About'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import LargeImageSection from '../LargeImageSection/LargeImageSection'

import { useIsMobile } from '../../../utils/breakpointUtils'

const Dashboard = () => {
    const isMobile = useIsMobile()

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
                <AboutElement src={'/static/img/nat-1-large.jpg'}>
                    <AboutElementTitle>Galería</AboutElementTitle>
                </AboutElement>
                <AboutElement src={'/static/img/nat-2-large.jpg'}>
                    <AboutElementTitle>Más servicios</AboutElementTitle>
                </AboutElement>
            </MoreInfoSection>
            <ContactForm />
            <Footer />
        </>
    );
};

export default Dashboard