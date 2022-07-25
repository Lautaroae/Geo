import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarElement.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={process.env.PUBLIC_URL + "/assets/geo.jpg"} alt="logo" /></Link>
                    <form className="d-flex">
                        <p className=" cliente" > Nombre del cliente</p>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar