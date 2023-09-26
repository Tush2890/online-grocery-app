import React from 'react';
import { locations, restaurants } from '../../utils/data';
import { Header } from '../Header';
import style from './orderOnline.module.css';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { MyRestaurant } from '../Restaurant';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setLocation } from '../../redux/app.slice';
import { setRestaurant } from '../../redux/restaurant.slice';

export const OrderOnline = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.appLevel.location);
    const headerMenus = [{
        element: <Dropdown
            classNames='form-control p-3 noTopRightBorder noBottomRightBorder'
            options={locations}
            value={location}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => dispatch(setLocation({ location: evt.target.value }))}
        />,
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

    const onRestaurantClick = (restaurantId: string) => {
        const selectedRestaurant = restaurants.find(rest => rest.id === restaurantId);
        if (selectedRestaurant) {
            dispatch(setRestaurant({ restaurant: selectedRestaurant }));
        }
        navigate('food-menus');
    }

    return (
        <div className={`container`}>
            <div className='mt-1'>
                <Header menus={headerMenus} showBrand={true} />
                <div className='row gy-4 mt-4'>
                    <h2 className='text-start'>Order food online</h2>
                    {restaurants.map(restaurant => (
                        <MyRestaurant key={restaurant.id} id={restaurant.id}
                            category={restaurant.category}
                            name={restaurant.name} rating={restaurant.rating}
                            onRestaurantClick={() => onRestaurantClick(restaurant.id)}
                            isOpen={restaurant.isOpen} />
                    ))}
                </div>
            </div>
        </div>
    )
}