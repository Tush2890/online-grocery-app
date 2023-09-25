import React from 'react';
import { Button } from '../../components/Button';
import { Product } from '../../utils/data';
import { ProductItem } from '../ProductItem';
import { Toast } from '../../components/Toast';
import { useAppSelector } from '../../redux/store';
import style from './product.module.css';
import { useNavigate } from 'react-router-dom';

type Props = {
    restaurantImage: string | undefined;
    restaurantName: string | undefined;
    restaurantCategory: string[] | undefined;
    location?: string,
    products: Product[]
}

export const MyProduct = ({ restaurantImage, restaurantName, restaurantCategory, location, products }: Props) => {
    const navigate = useNavigate();
    const cartProducts = useAppSelector(state => state.cart.products);
    let totalItemsCount = 0;
    cartProducts.forEach(item => totalItemsCount += item.count);
    return (
        <div className='container'>
            <div className='row text-start'>
                <img src={`${process.env.PUBLIC_URL}/restaurants/${restaurantImage}.avif`} width={450} height={450} />
                <h1 className='mt-2'><b>{restaurantName}</b></h1>
                <p>{restaurantCategory?.join(', ')}</p>
                <p>{location}</p>
                <p>Open now - 12midnight - 6:45am, 7am - 11:45pm (Today)</p>
                <div className='d-flex gap-2'>
                    <Button btnClassnames='btn btn-outline-secondary col-lg-1'>Direction</Button>
                    <Button btnClassnames='btn btn-outline-secondary col-lg-1'>Bookmark</Button>
                    <Button btnClassnames='btn btn-outline-secondary col-lg-1'>Share</Button>
                </div>
                <h2 className='mt-4'><b>Order Online</b></h2>
                <div className='d-flex flex-column'>
                    {products.map(prod => {
                        return <ProductItem key={prod.id} prod={prod} />
                    })}
                </div>
                <Toast className={totalItemsCount > 0 ? 'show' : 'hide'}>
                    {totalItemsCount} item(s) added in your cart
                    <div className='ms-auto cursor-pointer' onClick={() => navigate('checkout')}>
                        <img src={`${process.env.PUBLIC_URL}/shopping-cart.svg`} width={30} height={30} />
                        <span className={`${style.badge}`}>{totalItemsCount}</span>
                    </div>
                </Toast>
            </div>
        </div>
    )
}