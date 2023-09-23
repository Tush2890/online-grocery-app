import React from 'react';
import style from './home.module.css';
import { Header } from '../Header';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';

const assetsPath = process.env.PUBLIC_URL;

export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${style.home}`}>
                <Header headerClassNames={style.headerStyle}/>
                <div className='row p-5'>
                    <h1 className={`${style.h1}`}>BHUKKAD</h1>
                    <h2>Discover the best food & drinks</h2>
                    <div className='row justify-content-center mt-4'>
                        <select className='form-control p-3 w-25 noBorderRadius'>
                            <option>Wembley</option>
                            <option>Harrow</option>
                            <option>Hendon</option>
                            <option>Mill Hill</option>
                        </select>
                        <input type='text' className='form-control p-3 w-50 noBorderRadius' placeholder='Search for restaurant, cusine or a dish' />
                    </div>
                </div>
            </div>
            <div className={`mt-4 ${style.px10}`}>
                <div className='d-flex gap-4'>
                    <Card
                        imgSrc={`${assetsPath}/orderOnline.avif`}
                        text='Stay home and order to your doorstep'
                        title='Order Online'
                        classNames='col-12 col-md-4 text-start cursor-pointer'
                        onClick={() => navigate('order-food-online')} />
                    <Card
                        imgSrc={`${assetsPath}/dining.avif`}
                        text={`VIew the city's favourite dining venues`}
                        title='Dining'
                        classNames='col-12 col-md-4 text-start cursor-pointer' />
                    <Card
                        imgSrc={`${assetsPath}/nightlifeClubs.avif`}
                        text={`Explore the city's top nightlife outlets`}
                        title='Nightlife and Clubs'
                        classNames='col-12 col-md-4 text-start cursor-pointer' />
                </div>
            </div>
        </>
    )
}