import React, { useEffect, useState } from 'react'
import Form from './Form'
import "./HomeElement.css"
import { GiPadlock } from "react-icons/gi"
import Api from "./checkoutData.js"
import axios from 'axios';
import Swal from 'sweetalert';

const Home = () => {
    const [client, setClient] = useState([])

    useEffect(() => {
        const endPoint = Api
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data
                setClient(apiData.items)

            })
            .catch(error => {
                Swal({
                    title: "Upps!",
                    text: "Hay un error intenta mas tarde",
                    icon: "warning",
                })
            })
    }, [setClient])

    console.log()

    return (
        <>
            {client.map((oneClient, index) => {
                return (

                    <div className='home-container' key={index}>
                        <h1 className='titulo'>Completá los datos para pagar</h1>
                        <div className='card-container'>
                            <ul className='total-container'>
                                <li className="tot">Total</li>
                                <li className="norm">Salmon Salad x1</li>
                                <li className="norm">Chicken Mex Salad x100</li>
                                <li className="tot end">{oneClient.attributes.total_price}$ 386.999.98</li>
                                <li className="norm end"> $289.00</li>
                                <li className="norm end">$ 23,759.00</li>
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