import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <img src="/img/orange-logo.svg" alt="" style={{width: "150px"}}/>                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent" > 
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"  >
                            <a className="nav-link" aria-current="page" href="#"> Perfumes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skincare</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cabello</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                            <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
};