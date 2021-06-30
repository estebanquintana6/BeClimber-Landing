import React from 'react';

import { Row } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <div className="book">
            <div className="book__form">
                <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                            Escala con nostros!
                        </h2>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Full name" id="name" required />
                        <label for="name" className="form__label">Nombre</label>
                    </div>

                    <div className="form__group">
                        <input type="email" className="form__input" placeholder="Email address" id="email" required />
                        <label for="email" className="form__label">Email</label>
                    </div>

                    <div className="form__group u-margin-bottom-medium">
                        <div className="form__radio-group">
                            <input type="radio" className="form__radio-input" id="small" name="size" />
                            <label for="small" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Solo yo
                            </label>
                        </div>

                        <div className="form__radio-group">
                            <input type="radio" className="form__radio-input" id="large" name="size" />
                            <label for="large" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                En grupo
                            </label>
                        </div>
                    </div>

                    <div className="form__group">
                        <button className="btn btn--green">Next step &rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm