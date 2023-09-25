import React, { ReactNode } from 'react';
import style from './header.module.css';
import { useAppSelector } from '../../redux/store';

interface Menu {
    element: ReactNode;
    parentClassNames?: string;
}

interface MenuList {
    menus: Menu[],
    showBrand?: boolean
}

export const Header = ({ menus, showBrand = false }: MenuList) => {

    const cartProducts = useAppSelector(state => state.cart.products);

    const getCartCount = () => {
        let totalNumberofProducts = 0;
        cartProducts.forEach(prod => totalNumberofProducts += prod.count);
        return totalNumberofProducts;
    }

    return (
        <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
                {showBrand && <a className="navbar-brand" href="#">BHUKKAD</a>}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItems" aria-controls="menuItems" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuItems">
                    <ul className="navbar-nav w-100">
                        {menus.map(menu => (
                            <li className={`nav-item ${menu.parentClassNames}`}>
                                {menu.element}
                            </li>
                        ))}
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${headerClassNames}`} aria-current="page" to="/">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${headerClassNames}`} to="#">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${headerClassNames}`} to="/checkout">
                                <img
                                    src={`${process.env.PUBLIC_URL}/shopping-cart.svg`}
                                    width={30} height={30}
                                />
                                <span className={`${style.badge}`}>{getCartCount()}</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}