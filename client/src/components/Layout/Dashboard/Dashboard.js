import React from 'react';

import {
    AboutElement,
    AboutSection,
    AboutElementTitle,
    HeaderCenteredBox,
    MainHeader,
    Logo,
    SectionRow
} from './Dashboard.styles';

import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'


const Dashboard = () => {
    console.log("PUBLIC URL", process.env.PUBLIC_URL)
    return (
        <>
            <MainHeader src={'/static/img/background.jpg'}>
                <HeaderCenteredBox>
                    <Logo src={'/static/img/logo.png'}></Logo>
                </HeaderCenteredBox>
            </MainHeader>
            <AboutSection>
                <AboutElement src={'/static/img/nat-1-large.jpg'}>
                    <AboutElementTitle>¿Quiénes somos?</AboutElementTitle>
                </AboutElement>
                <AboutElement src={'/static/img/nat-2-large.jpg'}>
                    <AboutElementTitle>Nuestros servicios</AboutElementTitle>
                </AboutElement>
            </AboutSection>
            <ContactForm />
            <Footer />
        </>
    );
};

export default Dashboard