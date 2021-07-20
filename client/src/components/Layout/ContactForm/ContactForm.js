import React from 'react';

import { Row } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <div class="book">
            <div class="book__form">
                <form action="#" class="form">
                    <div class="u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Escala con nosotros
                        </h2>
                    </div>

                    <div class="form__group">
                        <input type="text" class="form__input" placeholder="Nombre" id="name" required />
                        <label for="name" class="form__label">Nombre</label>
                    </div>

                    <div class="form__group">
                        <input type="email" class="form__input" placeholder="Email" id="email" required />
                        <label for="email" class="form__label">Email</label>
                    </div>

                    <div class="form__group u-margin-bottom-medium">
                        <div class="form__radio-group">
                            <input type="radio" class="form__radio-input" id="small" name="size" />
                            <label for="small" class="form__radio-label">
                                <span class="form__radio-button"></span>
                                Yo solo
                            </label>
                        </div>

                        <div class="form__radio-group">
                            <input type="radio" class="form__radio-input" id="large" name="size" />
                            <label for="large" class="form__radio-label">
                                <span class="form__radio-button"></span>
                                En grupo
                            </label>
                        </div>
                    </div>

                    <div class="form__group">
                        <button class="btn btn--green">Next step &rarr;</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm