import React from 'react';

import {
    CopyRightText,
    CopyRightWrapper,
    FooterWrapper,
    FooterRow
} from './Footer.styles'

import { Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <FooterRow>
            <FooterWrapper className="footer">
                <div className="footer__logo-box">

                    <picture className="footer__logo">
                        <img srcset="/static/img/logo.png 1x"
                            alt="Full logo"
                            width="200px"
                            src="/static/img/logo.png"
                            media="(max-width: 37.5em)" />
                    </picture>


                </div>
                <FooterRow>
                    <CopyRightWrapper>
                        <CopyRightText className="footer__copyright">
                            Copyright &copy; B.Climber 2021.
                        </CopyRightText>
                    </CopyRightWrapper>
                </FooterRow>
            </FooterWrapper>
        </ FooterRow>
    );
};

export default Footer;
