import React, { useState } from 'react'
import "./FormElement.css"
import { Link as LinkRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Api from "../form/checkoutData"

const Forms = () => {
    const [send, setSend] = useState(false)

    return (
        <>
            <Formik
                initialValues={{
                    numC: "",
                    date: "",
                    code: "",
                    name: "",
                    dni: "",
                    radio: "",
                    email: "",
                }}
                validate={(value) => {

                    let err = {};

                    //validaciones de los campos

                    if (!value.numC) {
                        err.numC = "Por favor complete el campo"
                    } else if (!/^[0-9]{1,16}$/.test(value.numC)) {
                        err.numC = "Se deben ingresar solo 16 números"
                    }
                    if (!value.date) {
                        err.date = "Por favor complete el campo"
                    } else if (!/^[0-9]{1,4}$/.test(value.date)) {
                        err.date = "Se debe ingresar mes y año "
                    }
                    if (!value.code) {
                        err.code = "Por favor complete el campo"
                    } else if (!/^[0-9]{1,3}$/.test(value.code)) {
                        err.code = "Se deben ingresar solo 3 números"
                    }
                    if (!value.name) {
                        err.name = "Por favor complete el campo"
                    } else if (! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)) {
                        err.name = "Se deben ingresar solo letras y espacios vacios"
                    }
                    if (!value.dni) {
                        err.dni = "Por favor complete el campo"
                    } else if (!/^[0-9]{1,8}$/.test(value.dni)) {
                        err.dni = "Se deben ingresar solo números"
                    }
                    if (!value.email) {
                        err.email = "Por favor complete el campo"
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.email)) {
                        err.email = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo"
                    }
                    return err
                }}

                //-------------------------

                onSubmit={(value, { resetForm }) => {

                    resetForm();
                    console.log("formulario enviado")
                    setSend(true)
                    setTimeout(() => setSend(false), 5000)
                }}
            >

                {({ errors }) => (

                    <Form>

                        <div className='form-container'>
                            <div className="tarjeta">
                                <label htmlFor="numC" className="label">Número de tarjeta</label>
                                <Field
                                    type="num"
                                    id="numT"
                                    name="numT"
                                    placeholder=" Número de tarjeta"
                                    className="numC"
                                />
                                <div><img className="imgC" src={process.env.PUBLIC_URL + "/assets/visa.png"} alt="logo" /></div>
                                <ErrorMessage name="numC" component={() => (<div className="error">{errors.numC}</div>)} />

                            </div>
                            <div className="allInputsC">
                                <div>

                                    <Field
                                        type="text"
                                        id="date"
                                        name="date"
                                        placeholder=" MM/AA"
                                        className="allInputsCc"
                                    />
                                    <label className="date" htmlFor="date">Fecha de expiracion</label>
                                    <ErrorMessage name="date" component={() => (<div className="error">{errors.date}</div>)} />
                                </div>

                                <div>
                                    <Field
                                        type="text"
                                        id="code"
                                        name="code"
                                        placeholder="Cód. de seguridad ?"
                                        className="allInputsCc"
                                    />
                                    <label className="date" htmlFor="code">3 números al dorso de la tarjeta</label>
                                    <ErrorMessage name="code" component={() => (<div className="error">{errors.code}</div>)} />
                                </div>
                            </div>
                            <div className="allInputs">
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder=" Nombre de titular"
                                    className="field"
                                />
                                <label className="label" htmlFor="name">Como figura en la tarjeta</label>
                                <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
                            </div>
                            <div className="allInputs">
                                <Field
                                    type="text"
                                    id="dni"
                                    name="dni"
                                    placeholder=" DNI del titular"
                                    className="field"
                                />
                                <label className="label" htmlFor="dni">Número de documento</label>
                                <ErrorMessage name="dni" component={() => (<div className="error">{errors.dni}</div>)} />
                            </div>

                            <p className="c">Cuotas</p>
                            {Api.map((oneClient, index) => {
                                return (

                                    <div className='input-container' key={index}>

                                        <div className="form-check" >
                                            <label className="form-check-label" htmlFor="radio" >
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="radio"
                                                    value="radio" />
                                                <ul>
                                                    <li>1 cuotas de ${oneClient.data.installments.installmentPrice}</li>
                                                    <li>CF:{oneClient.data.installments.financialRate}%</li>
                                                    <li className='side-rigth'>${oneClient.data.installments.total}</li>
                                                </ul>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="radio"
                                                    value="radio2" />
                                                <ul>
                                                    <li>3 cuotas de ${oneClient.data.installments.installmentPrice2}</li>
                                                    <li>CF:{oneClient.data.installments.financialRate2}%</li>
                                                    <li className='side-rigth'>${oneClient.data.installments.total2}</li>
                                                </ul>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="radio">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="radio"
                                                    value="radio3" />
                                                <ul >
                                                    <li>6 cuotas de {oneClient.data.installments.installmentPrice3}</li>
                                                    <li>CF:{oneClient.data.installments.financialRate3}%</li>
                                                    <li className='side-rigth'>${oneClient.data.installments.total3}</li>
                                                </ul>
                                            </label>
                                        </div>
                                    </div>
                                )
                            })}

                            <p className="dp">Datos personales</p>

                            <div className="allInputs">
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=" E-mail"
                                    className="field"
                                />
                                <label className="label" htmlFor="email">A este email te enviaremos el recibo de compra</label>
                                <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                            </div>
                            <div className='button'>
                                <LinkRouter to={"/denied"}><button type="submit">Continuar</button></LinkRouter>
                                {send && <p>Compra realizada con exito!</p>}
                            </div>

                        </div>

                    </Form>

                )}

            </Formik>
        </>
    )
}

export default Forms