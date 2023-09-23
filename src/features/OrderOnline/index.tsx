import React from 'react';
import { Product } from '../Product/Product';
import { items } from '../../utils/data';
import { Header } from '../Header';
import style from './orderOnline.module.css';

export const OrderOnline = () => {
    return (
        <div className={`container`}>
            <div className='mt-1'>
                <Header headerClassNames={style.headerStyle} />
                <div className='row gy-2'>
                    {items.map(item => (
                        <Product key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}