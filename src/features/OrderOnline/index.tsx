import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../Header';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { MyRestaurant } from '../Restaurant';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setLocation } from '../../redux/app.slice';
import { setRestaurant, setSearchParam } from '../../redux/restaurant.slice';
import axios from 'axios';
import { Restaurant } from '../../utils/models';
import { setRestaurantList } from '../../utils/service';
import { RESTAURANT_API_URL, TIMEOUT_IN_MILLISECS } from '../../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const OrderOnline = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.appLevel.location);
    const locations = useAppSelector(state => state.appLevel.locations);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const searchString = useAppSelector(state => state.restaurant.searchParam);
    const [page, setPage] = useState<number>(0);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver);
        const footer = document.querySelector('footer');
        if (footer) {
            observer.observe(footer);
        }
        // Clean up the observer when the component unmounts.
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        fetchRestaurants();
    }, [page, searchString])

    const fetchRestaurants = useCallback(async () => {
        try {
            const response = await axios
                .get<{ data: Restaurant[] }>(`${RESTAURANT_API_URL}/${location}?searchString=${searchString}&startPage=${page}`);
            if (response.data.data.length > 0) {
                setRestaurants(prevListOfRestaurants => [...prevListOfRestaurants, ...response.data.data]);
                setRestaurantList([...restaurants, ...response.data.data]);
            }
        }
        catch (err) {
            setRestaurants([]);
            setRestaurantList([]);
            console.error(`Error fetching the restaurants - ${err}`);
        }
    }, [location, searchString, page]);

    const debounced = useDebouncedCallback(
        (value) => {
            dispatch(setSearchParam({ searchParam: value }));
            setRestaurants([]);
            setPage(0);
        },
        TIMEOUT_IN_MILLISECS
    );
    const headerMenus = [{
        id: 'menu1',
        element: <Dropdown
            classNames='form-control p-3 noTopRightBorder noBottomRightBorder'
            options={locations}
            value={location}
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => dispatch(setLocation({
                location: evt.target.value
            }))}
        />,
        parentClassNames: 'w-25'
    }, {
        id: 'menu2',
        element: <Input id='searchInput' type='text'
            classNames='form-control p-3 noTopLeftBorder noBottomLeftBorder'
            placeholder='Search for restaurant, cusine or a dish'
            onKeyUp={(evt: React.ChangeEvent<HTMLInputElement>) => debounced(evt.target.value)} />,
        parentClassNames: 'w-50'
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

export default withAuthenticationRequired(OrderOnline);