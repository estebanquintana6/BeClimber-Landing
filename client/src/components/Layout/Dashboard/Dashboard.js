import React from 'react';

import {
    AboutElement,
    AboutElementTitle,
    HeaderCenteredBox,
    MainHeader,
    MoreInfoSection,
    Logo,
    SectionRow
} from './Dashboard.styles';

import About from '../About/About'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'


const Dashboard = () => {
    return (
        <>
            <MainHeader src={'/static/img/background.jpg'}>
                <HeaderCenteredBox>
                    <Logo src={'/static/img/logo.png'}></Logo>
                </HeaderCenteredBox>
            </MainHeader>
            <About>

            </About>
            <MoreInfoSection>
                <AboutElement src={'/static/img/nat-1-large.jpg'}>
                    <AboutElementTitle>¿Quiénes somos?</AboutElementTitle>
                </AboutElement>
                <AboutElement src={'/static/img/nat-2-large.jpg'}>
                    <AboutElementTitle>Nuestros servicios</AboutElementTitle>
                </AboutElement>
            </MoreInfoSection>
            <ContactForm />
            <Footer />
        </>
    );
};

export default Dashboard