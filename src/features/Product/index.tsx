import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Product } from '../../utils/data';
import { ProductItem } from '../ProductItem';

type Props = {
    restaurantImage: string | undefined;
    restaurantName: string | undefined;
    restaurantCategory: string[] | undefined;
    location?: string,
    products: Product[]
}

export const MyProduct = ({ restaurantImage, restaurantName, restaurantCategory, location, products }: Props) => {
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
                        return <ProductItem key={prod.id} prod={prod}/>
                    })}
                </div>
            </div>
        </div>
    )
}