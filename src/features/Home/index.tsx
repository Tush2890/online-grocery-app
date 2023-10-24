import React, { useEffect } from 'react';
import style from './home.module.css';
import { Header } from '../Header';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../../components/Dropdown';
import { Input } from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setLocation, setLocations } from '../../redux/app.slice';
import axios from 'axios';
import { setSearchParam } from '../../redux/restaurant.slice';
import { LOCATION_API_URL, TIMEOUT_IN_MILLISECS } from '../../utils/constants';
import { useDebouncedCallback } from 'use-debounce';
import { useAuth0 } from '@auth0/auth0-react';
import UserProfile from '../UserProfile';

const assetsPath = process.env.PUBLIC_URL;

const Home = () => {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.appLevel.location);
    const locations = useAppSelector(state => state.appLevel.locations);

    useEffect(() => {
        fetchLocation();
    }, []);

    let headerMenus;
    if (!isAuthenticated) {
        headerMenus = [{
            id: 'menu1',
            element: <a className={`nav-link cursor-pointer ${style.navLinkStyle}`} onClick={() => loginWithRedirect()}>Log in</a>,
            parentClassNames: 'ms-auto'
        }];
    } else {
        headerMenus = [{
            id: 'menu1',
            element: <UserProfile userName={user?.name} />,
            parentClassNames: 'ms-auto'
        }];
    }

    const fetchLocation = async () => {
        try {
            const response = await axios.get<Array<{ id: string, name: string }>>(LOCATION_API_URL);
            dispatch(setLocations({ locations: response.data }));
        }
        catch (err) {
            dispatch(setLocations({ locations: [] }));
            console.error(`Error fecthing the locations - ${err}`);
        }
    }
    const debounced = useDebouncedCallback(
        (value) => {
            dispatch(setSearchParam({ searchParam: value }));
            navigate('order-food-online');
        },
        TIMEOUT_IN_MILLISECS
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
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

export default Home;