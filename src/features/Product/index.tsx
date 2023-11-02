import { Button } from '../../components/Button';
import { ProductItem } from '../ProductItem';
import { Toast } from '../../components/Toast';
import { useAppSelector } from '../../redux/store';
import style from './product.module.css';
import { useNavigate } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const MyProduct = () => {
    const navigate = useNavigate();
    const restaurtant = useAppSelector(state => state.restaurant.restaurant);
    const cartProducts = useAppSelector(state => state.cart.products);
    let totalItemsCount = 0;
    cartProducts.forEach(item => totalItemsCount += item.count);
    const base64String = btoa(new Uint8Array(restaurtant.ImageFile.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
    return (
        <div className='container'>
            <div className='row text-start'>
                <img src={`data:image/png;base64,${base64String}`} width={450} height={450} alt='restaurantImage' />
                <h1 className='mt-2'><b>{restaurtant.Name}</b></h1>
                <p>{restaurtant.Category}</p>
                <p>{restaurtant.StreetAddress}</p>
                <p><span className={style.restaurantStatus}>
                    {restaurtant.Open ? 'Open now' : 'Closed'}
                </span> - 12midnight - 6:45am, 7am - 11:45pm (Today)
                </p>
                <div className='d-flex gap-2'>
                    <Button btnClassnames='btn btn-outline-secondary col-lg-1'>Direction</Button>
                    <Button btnClassnames='btn btn-outline-secondary col-lg-1'>Bookmark</Button>
                    <Button btnClassnames='btn btn-outline-secondary col-lg-1'>Share</Button>
                </div>
                <h2 className='mt-4'><b>Order Online</b></h2>
                <div className='d-flex flex-column'>
                    {restaurtant.items.map(prod => {
                        return <ProductItem key={prod.Name} prod={prod} />
                    })}
                </div>
                <Toast className={totalItemsCount > 0 ? 'show' : 'hide'}>
                    {totalItemsCount} item(s) added in your cart
                    <div className='ms-auto cursor-pointer' onClick={() => navigate('checkout')}>
                        <img src={`${process.env.PUBLIC_URL}/shopping-cart.svg`} width={30} height={30} alt='cartImage' />
                        <span className={`${style.badge}`}>{totalItemsCount}</span>
                    </div>
                </Toast>
            </div>
        </div>
    )
}

export default withAuthenticationRequired(MyProduct);