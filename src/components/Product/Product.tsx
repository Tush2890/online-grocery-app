import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { ITEM_ADDED, ITEM_REMOVED } from '../../utils/constants';

type Props = {
    item: {
        id: string,
        image: string,
        title: string,
        category: string,
        rating?: number,
        price?: string
    }
}

export const Product = ({ item }: Props) => {

    const dispatch = useAppDispatch();

    const [itemCount, setItemCount] = useState(0);

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className='card p-3'>
                <img
                    className="card-img-top"
                    src={`${process.env.PUBLIC_URL}/items/${item.image}`}
                    alt="Product Card"
                    width={200} height={200} />
                <div className="mt-2 d-inline-flex">
                    <div className='w-75'>
                        <h5 className="text-start">{item.title}</h5>
                        <p className="text-start">{item.category}</p>
                    </div>
                    <div className='w-30 d-inline-flex fitContentHeight'>
                        <button
                            className='btn btn-primary noBorderRadius'
                            disabled={itemCount === 0}
                            onClick={() => {
                                setItemCount(itemCount - 1);
                                dispatch({ type: ITEM_REMOVED });
                            }}>
                            -
                        </button>
                        <input type='text' className='form-control px-2 noBorderRadius' value={itemCount} readOnly={true} />
                        <button
                            className='btn btn-primary noBorderRadius'
                            onClick={() => {
                                setItemCount(itemCount + 1);
                                dispatch({ type: ITEM_ADDED });
                            }}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}