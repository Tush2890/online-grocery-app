import React, { ReactNode } from 'react';

interface Menu {
    id: string;
    element: ReactNode;
    parentClassNames?: string;
}

interface MenuList {
    menus: Menu[],
    showBrand?: boolean
}

export const Header = ({ menus, showBrand = false }: MenuList) => {
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
                            <li key={menu.id} className={`nav-item ${menu.parentClassNames}`}>
                                {menu.element}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}