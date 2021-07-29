import React, { useEffect, useState } from 'react';

import emailjs from 'emailjs-com';
import swal from '@sweetalert/with-react';

import { SubmitButton } from './ContactForm.styles'

const ContactForm = () => {

    const [form, setForm] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        emailjs.sendForm(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            e.target,
            process.env.USER_ID)
            .then((result) => {
                swal({
                    icon: "success",
                    content: <h2>Gracias por ponerte en contacto con nosotros. <br />
                        Pronto nos comunicaremos contigo</h2>,
                })
            }, (error) => {
                swal({
                    icon: "error",
                    content: <h2>Hubo un error al mandar tu correo! Intentalo de nuevo</h2>,
                })
            });
    }

    return (
        <div className="book">
            <div className="book__form">
                <form onSubmit={handleSubmit} className="form">
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                            Escala con nosotros
                        </h2>
                    </div>

                    <div className="form__group">
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Nombre"
                            name="user_name"
                            id="user_name"
                            required
                            onChange={(e) => {
                                setForm({
                                    ...form,
                                    user_name: e.target.value
                                })
                            }} />
                        <label for="user_name" className="form__label">Nombre</label>
                    </div>

                    <div className="form__group">
                        <input
                            type="email"
                            className="form__input"
                            placeholder="Email"
                            name="user_email"
                            id="user_email"
                            required
                            onChange={(e) => {
                                setForm({
                                    ...form,
                                    user_email: e.target.value
                                })
                            }} />
                        <label for="user_email" className="form__label">Email</label>
                    </div>

                    <div className="form__group u-margin-bottom-medium">
                        <div className="form__radio-group">
                            <input
                                type="radio"
                                className="form__radio-input"
                                id="small"
                                name="course"
                                value={"Día de escalada"}
                                onChange={(e) => {
                                    setForm({
                                        ...form,
                                        group: false
                                    })
                                }} />
                            <label for="small" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Día de escalada
                            </label>
                        </div>

                        <div className="form__radio-group">
                            <input
                                type="radio"
                                className="form__radio-input"
                                id="large"
                                name="course"
                                value={"Curso de escalada"}
                                onChange={(e) => {
                                    setForm({
                                        ...form,
                                        group: true
                                    })
                                }} />
                            <label for="large" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Curso de escalada
                            </label>
                        </div>
                    </div>
                    <div className="form__group">
                        <SubmitButton type="submit" value={"Enviar"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm