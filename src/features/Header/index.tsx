import React from 'react';
import style from './header.module.css';
import { useAppSelector } from '../../redux/store';
import { Link } from 'react-router-dom';

interface Props {
    headerClassNames?: string;
}

export const Header = ({ headerClassNames }: Props) => {

    const cartProducts = useAppSelector(state => state.cart.products);

    const getCartCount = () => {
        let totalNumberofProducts = 0;
        cartProducts.forEach(prod => totalNumberofProducts += prod.count);
        return totalNumberofProducts;
    }

    return (
        <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItems" aria-controls="menuItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuItems">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${headerClassNames}`} aria-current="page" to="/">Help</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${headerClassNames}`} to="#">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${headerClassNames}`} to="/checkout">
                                <img
                                    src={`${process.env.PUBLIC_URL}/shopping-cart.svg`}
                                    width={30} height={30}
                                />
                                <span className={`${style.badge}`}>{getCartCount()}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}