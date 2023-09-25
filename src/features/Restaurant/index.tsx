import React from 'react';
import style from './restaurant.module.css';

type Props = {
    id: string, category: string[], name: string, rating: string, onRestaurantClick: () => void
}

export const MyRestaurant = ({ id, category, name, rating, onRestaurantClick }: Props) => {

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 cursor-pointer" onClick={onRestaurantClick}>
            <div className='card p-3 cardWithoutBorder'>
                <img
                    className="card-img-top"
                    src={`${process.env.PUBLIC_URL}/restaurants/${id}.avif`}
                    alt="Product Card"
                    width={200} height={200} />
                <div className="mt-2 row">
                    <div className='flex-column col-lg-9 text-start'>
                        <h5 className="text-start">{name}</h5>
                        <span className="text-start">{category.join(', ')}</span>
                    </div>
                    <div className='d-flex flex-column col-lg-3 align-items-end'>
                        <span className={`${style.ratingBadge} p-1`}>{rating}&#9733;</span>
                        <span><b>22 min</b></span>
                    </div>
                </div>
            </div>
        </div >
    )
}