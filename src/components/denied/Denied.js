import React from 'react'
import { Link as LinkRouter } from "react-router-dom"
import "./DeniedElement.css"

const Denied = () => {
    return (
        <>
            <div className='deniedContainer'>
                <img src={process.env.PUBLIC_URL + "/assets/signo-de-exclamacion.png"} alt="alert" className='img' />
                <h2>Transacción denegada </h2>
                <p>¡Disculpas! Se ha producido un error, por favor vuelve a intentar</p>

                <div className='button'>
                    <LinkRouter to={"/"}><button type="submit">Volver a intentar</button></LinkRouter>

                </div>
            </div>
        </>
    )
}

export default Denied