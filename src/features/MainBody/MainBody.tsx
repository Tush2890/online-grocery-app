import React from 'react';
import style from  './MainBody.module.css';
import { Product } from '../Product/Product';
import { items } from '../../utils/data';


export const MainBody = () => {
    return (
        <div className={`container mt-2 ${style.mainBodyContainer}`}>
            <div className='row gy-2'>
                {items.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}