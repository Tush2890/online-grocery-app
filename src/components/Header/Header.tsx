import React, { useContext } from 'react';
import './Header.css';
import { useAppSelector } from '../../redux/hooks';

export const Header = () => {

    const cartCount = useAppSelector((state) => state.cart.count);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItems" aria-controls="menuItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuItems">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ContactUs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={`${process.env.PUBLIC_URL}/shopping-cart.svg`} width={30} height={30} />
                                <span className='badge'>{cartCount}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}