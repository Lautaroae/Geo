import React from 'react'
import Form from './Form'
import "./HomeElement.css"
import { GiPadlock } from "react-icons/gi"
import Api from "./checkoutData"


const Home = () => {

    return (
        <>
            {Api.map((oneClient, index) => {
                return (

                    <div className='home-container' key={index}>
                        <h1 className='titulo'>Completá los datos para pagar</h1>

                        <div className='card-container'>

                            <ul className='total-container'>
                                <li className="tot">Total</li>
                                <li className="norm">{oneClient.data.attributes.name1} x {oneClient.data.attributes.quantity}</li>
                                <li className="norm">{oneClient.data.attributes.name2} x {oneClient.data.attributes.quantity2}</li>
                                <li className="tot end">${oneClient.data.attributes.total_price}</li>
                                <li className="norm end">${oneClient.data.attributes.amount}</li>
                                <li className="norm end">${oneClient.data.attributes.amount2}</li>
                            </ul>
                        </div>
                        <div className='text-container'>
                            <p className="text"> Paga con tarjeta de crédito o débito.</p>
                            <select className="form-select mb-3" id="validationCustom04" required>
                                <option value="">Ver tarjetas</option>
                                <option></option>
                            </select>
                        </div>

                        <Form />

                        <p className="down"> <GiPadlock /> Todas las transacciones son seguras y encriptadas</p>

                    </div>
                )
            })}

        </>
    )
}

export default Home