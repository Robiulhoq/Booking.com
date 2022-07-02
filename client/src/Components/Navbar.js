import React from 'react'
import './Navbar.css';
function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Booking.com</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">--</span>
                        </button>
                    <div className="collapse navbar-collapse justify-content-center justify-content-sm-end" id="navbarSupportedContent">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOTEL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ROOM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="nav">
                            <li className="nav-item">
                                <button className='btn btn_login'>Login</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-danger'>Sing Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;