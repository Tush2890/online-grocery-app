import React from 'react';
import './Header.css';
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';

export const Header = () => {

    const cartCount = useAppSelector((state) => state.cart.count);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItems" aria-controls="menuItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuItems">
                    <input type='text' className='w-50 form-control mx-auto' placeholder='Search by category or name' />
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Help</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkout">
                                <img
                                    src={`${process.env.PUBLIC_URL}/shopping-cart.svg`}
                                    width={30} height={30}
                                />
                                <span className='badge'>{cartCount}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}