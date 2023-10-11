import React, { useEffect } from 'react';
import style from './home.module.css';
import { Header } from '../Header';
import { Card } from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setLocation, setLocations } from '../../redux/app.slice';
import axios from 'axios';
import { setSearchParam } from '../../redux/restaurant.slice';
import { TIMEOUT_IN_MILLISECS } from '../../utils/constants';
import { useDebouncedCallback } from 'use-debounce';

const assetsPath = process.env.PUBLIC_URL;
const headerMenus = [{
    id: 'menu1',
    element: <Link className={`nav-link ${style.navLinkStyle}`} to={'/login'}>Log in</Link>,
    parentClassNames: 'ms-auto'
}, {
    id: 'menu2',
    element: <Link className={`nav-link ${style.navLinkStyle}`} to={'#'}>Sign up</Link>
}];

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.appLevel.location);
    const locations = useAppSelector(state => state.appLevel.locations);

    useEffect(() => {
        axios.get<Array<{ id: string, name: string }>>(`${process.env.REACT_APP_BASE_URL}/locations`)
            .then((response) => dispatch(setLocations({ locations: response.data })))
            .catch(error => {
                console.error(`Error fetching the locations - ${error}`)
            });;
    }, [dispatch]);

    const debounced = useDebouncedCallback(
        (value) => {
            dispatch(setSearchParam({ searchParam: value }));
            navigate('order-food-online');
        },
        TIMEOUT_IN_MILLISECS
    );

    return (
        <>
            <div className={`${style.home}`}>
                <Header menus={headerMenus} />
                <div className='row p-5'>
                    <h1 className={`${style.h1}`}>BHUKKAD</h1>
                    <h2>Discover the best food & drinks</h2>
                    <div className='row justify-content-center mt-4'>
                        <Dropdown
                            classNames='form-control p-3 w-25 noTopRightBorder noBottomRightBorder'
                            options={locations}
                            value={location}
                            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => dispatch(setLocation({
                                location: evt.target.value
                            }))}
                        />
                        <Input id='searchInput' type='text'
                            classNames='form-control p-3 w-50 noTopLeftBorder noBottomLeftBorder'
                            placeholder='Search for restaurant, cusine or a dish'
                            onKeyUp={(evt: React.ChangeEvent<HTMLInputElement>) => debounced(evt.target.value)} />
                    </div>
                </div>
            </div>
            <div className={`mt-4 ${style.px10}`}>
                <div className='d-flex gap-4'>
                    <Card
                        imgSrc={`${assetsPath}/orderOnline.avif`}
                        text='Stay home and order to your doorstep'
                        title='Order Online'
                        classNames={`col-12 col-md-4 text-start cursor-pointer ${style.hoverCard}`}
                        onClick={() => navigate('order-food-online')} />
                    <Card
                        imgSrc={`${assetsPath}/dining.avif`}
                        text={`VIew the city's favourite dining venues`}
                        title='Dining'
                        classNames={`col-12 col-md-4 text-start cursor-pointer ${style.hoverCard}`} />
                    <Card
                        imgSrc={`${assetsPath}/nightlifeClubs.avif`}
                        text={`Explore the city's top nightlife outlets`}
                        title='Nightlife and Clubs'
                        classNames={`col-12 col-md-4 text-start cursor-pointer ${style.hoverCard}`} />
                </div>
            </div>
        </>
    )
}