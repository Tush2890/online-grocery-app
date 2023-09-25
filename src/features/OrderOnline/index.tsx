import React, { useState } from 'react';
import { Product, Restaurant, locations, products, restaurants } from '../../utils/data';
import { Header } from '../Header';
import style from './orderOnline.module.css';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { MyRestaurant } from '../Restaurant';
import { MyProduct } from '../Product';


const headerMenus = [{
    element: <Dropdown classNames='form-control p-3 noTopRightBorder noBottomRightBorder' options={locations} />,
    parentClassNames: 'w-25'
}, {
    element: <Input type='text'
        classNames='form-control p-3 noTopLeftBorder noBottomLeftBorder'
        placeholder='Search for restaurant, cusine or a dish' value='' />,
    parentClassNames: 'w-50'
}, {
    element: <Link className={`nav-link ${style.navLinkStyle}`} to={'#'}>Log in</Link>,
    parentClassNames: 'ms-auto'
}, {
    element: <Link className={`nav-link ${style.navLinkStyle}`} to={'#'}>Sign up</Link>
}];

export const OrderOnline = () => {
    const [showRestaurants, setShowRestaurants] = useState(true);
    const [productList, setProductList] = useState<Array<Product>>([]);
    const [restaurant, setRestaurant] = useState<Restaurant>();

    const onRestaurantClick = (restaurantId: string) => {
        setShowRestaurants(false);
        const myProducts = products.filter(prod => prod.restaurantId === restaurantId);
        setProductList(myProducts);
        const myRestaurant = restaurants.find(rest => rest.id === restaurantId);
        setRestaurant(myRestaurant);
    }

    return (
        <div className={`container`}>
            <div className='mt-1'>
                <Header menus={headerMenus} showBrand={true} />
                {
                    showRestaurants && <div className='row gy-2 mt-4'>
                        <h2 className='text-start'>Order food online</h2>
                        {restaurants.map(restaurant => (
                            <MyRestaurant key={restaurant.id} id={restaurant.id}
                                category={restaurant.category}
                                name={restaurant.name} rating={restaurant.rating}
                                onRestaurantClick={() => onRestaurantClick(restaurant.id)} />
                        ))}
                    </div>
                }
                {
                    !showRestaurants && <MyProduct products={productList}
                        restaurantCategory={restaurant?.category} restaurantImage={restaurant?.id}
                        restaurantName={restaurant?.name} />
                }
            </div>
        </div>
    )
}