import React from 'react';
import { Product } from '../../utils/data';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import style from './productItem.module.css';
import { CURRENCY } from '../../utils/constants';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { productAdded, productRemoved } from '../../redux/cart.slice';
import { CartItem } from '../CartItem';

type Props = {
    prod: Product
}

export const ProductItem = ({ prod }: Props) => {
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector(state => state.cart.products);

    const getItemCount = () => {
        const product = cartProducts.find(product => product.id === prod.id);
        let productItemCount = product?.count || 0;
        return productItemCount;
    }

    const getRatingStars = (rating: string) => {
        const stars = Array(5).fill(0);
        return (
            <div>
                {stars.map((_, index) => {
                    const className = index < parseInt(rating) ? "fa-solid" : "fa-regular";
                    return <i key={index} className={`${className} fa-star ${style.star}`}></i>;
                })}
            </div>
        );
    }
    const productItemCount = getItemCount();
    return (
        <div className='d-flex gap-2'>
            <img
                src={`${process.env.PUBLIC_URL}/${prod.isVeg ? 'veg' : 'non-veg'}.png`}
                width={20} height={20} />
            <div className='flex-column'>
                <h5><b>{prod.name}</b></h5>
                {getRatingStars(prod.rating)}
                <p>{CURRENCY[prod.currency]}{prod.price}</p>
            </div>
            {
                productItemCount === 0 && <Button btnClassnames={`btn btn-outline-success px-5 ${style.h40}`}
                    btnOnClick={() => {
                        dispatch(productAdded({ id: prod.id }));

                    }}>ADD</Button>
            }
            {
                productItemCount > 0 && <CartItem productItemCount={productItemCount} productItemId={prod.id} />
            }
        </div>
    )
}