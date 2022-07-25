import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarElement.css"
import Api from "../form/checkoutData"


const Navbar = () => {
    return (
        <>
            {Api.map((oneClient, index) => {
                return (
                    <nav className="navbar navbar-dark" key={index}>
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand"><img src={process.env.PUBLIC_URL + "/assets/geo.jpg"} alt="logo" /></Link>
                            <form className="d-flex">
                                <p className=" cliente" > {oneClient.data.shop_name}</p>
                            </form>
                        </div>
                    </nav>
                )
            })}
        </>
    )
}

export default Navbar