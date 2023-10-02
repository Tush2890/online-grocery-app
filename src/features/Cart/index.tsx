import React, { useState } from 'react';
import style from './cart.module.css';
import { Button } from '../../components/Button';
import { useAppSelector } from '../../redux/store';
import { CartItem } from '../CartItem';
import {
    DELIVERY_FEE, SERVICE_CHARGE, getAmountToPay, getProductName,
    getProductPrice, getRestaurant, getTotalPrice
} from './cart.utils';

export const Cart = () => {
    const [loginForm, setLoginForm] = useState(false);
    const [signInForm, setSignInForm] = useState(false);
    const cartProducts = useAppSelector(state => state.cart.products);
    const currency = useAppSelector(state => state.appLevel.currency);
    const productItems = useAppSelector(state => state.restaurant.items);
    return (
        <div className='row gap-4 container mt-4 mx-auto'>
            <div className='containerLeft col-lg-7 col-md-6 col-sm-12'>
                <div className={`row ${style.customSection}`}>
                    <div className='col-md-8 col-lg-10'>
                        <h5><b>Account</b></h5>
                        <span>To place your order now, log in to your existing account or sign up.</span>
                        {
                            loginForm && !signInForm && <div className='flex-column row mt-4'>
                                <span className='cursor-pointer' onClick={() => {
                                    setSignInForm(true);
                                    setLoginForm(false);
                                }}>Enter login details or <b>create an account</b></span>
                                <input type='text' className='ms-2 form-control my-2 w-75' placeholder='Phone number' />
                                <Button btnClassnames='ms-2 btn btn-success my-2 w-75' btnOnClick={() => ''}>LOGIN</Button>
                                <div className='w-75'>
                                    By clicking on Login, I accept the <b> Terms & Conditions & Privacy Policy</b>
                                </div>
                            </div>
                        }
                        {
                            signInForm && !loginForm && <div className='flex-column row mt-4'>
                                <span className='cursor-pointer' onClick={() => {
                                    setSignInForm(false);
                                    setLoginForm(true);
                                }}>Sign up or <b>log in to your account</b>
                                </span>
                                <input type='text' className='ms-2 form-control my-2 w-75' placeholder='Phone number' />
                                <input type='text' className='ms-2 form-control my-2 w-75' placeholder='Name' />
                                <input type='email' className='ms-2 form-control my-2 w-75' placeholder='Email' />
                                <Button btnClassnames='ms-2 btn btn-success my-2 w-75' btnOnClick={() => ''}>CONTINUE</Button>
                                <div className='w-75'>
                                    By clicking on Login, I accept the <b> Terms & Conditions & Privacy Policy</b>
                                </div>
                            </div>
                        }
                        {!loginForm && !signInForm && <div className='row gap-4 mt-4'>
                            <Button btnClassnames='btn btn-outline-success col-lg-5' btnOnClick={() => setLoginForm(true)}>
                                Have an account? <br /> <b>LOG IN</b>
                            </Button>
                            <Button btnClassnames='btn btn-success col-lg-5' btnOnClick={() => setSignInForm(true)}>
                                New to App? <br /><b>SIGN UP</b>
                            </Button>
                        </div>}
                    </div>
                    <div className='col-md-4 col-lg-2'>
                        <img src={`${process.env.PUBLIC_URL}/wrap.webp`} className='mt-5' height={100} width={100} alt='signInImage' />
                    </div>
                </div>

            </div>
            <div className={`containerRight col-lg-4 col-md-5 col-12 ${style.customSection}`}>
                <div className='d-flex gap-3'>
                    <img
                        src={`${process.env.PUBLIC_URL}/restaurants/${getRestaurant(productItems, cartProducts[0].id)?.id}.avif`}
                        className='col-2' width={50} height={50} alt='restaurantImage' />
                    <div className='flex-column col-10'>
                        <h5><b>{getRestaurant(productItems, cartProducts[0].id)?.name}</b></h5>
                        <span>{getRestaurant(productItems, cartProducts[0].id)?.address.streetAddress}</span>
                    </div>
                </div>
                {
                    cartProducts.map(prod => (
                        prod.count > 0 && <div className={`d-flex mt-4`} key={prod.id}>
                            <div className={`${style.productItemName}`}>{getProductName(productItems, prod.id)}</div>
                            <CartItem productItemCount={prod.count} productItemId={prod.id} classNames='ms-3' />
                            <div className='ms-auto'>
                                {`${currency}${getProductPrice(productItems, prod.id, prod.count)}`}
                            </div>
                        </div>
                    ))
                }
                <div className='mt-4'>
                    <h5>Bill Details</h5>
                    <div className={`d-flex ${style.noFlexWrap}`}>
                        <span>Item Total</span>
                        <span className='ms-auto'>{`${currency}${getTotalPrice(productItems, cartProducts)}`}</span>
                    </div>
                    <div className={`d-flex ${style.noFlexWrap}`}>
                        <span>Delivery Fee | 3.0 kms</span>
                        <span className='ms-auto'>{`${currency}${DELIVERY_FEE}`}</span>
                    </div>
                    <hr />
                    <div className={`d-flex ${style.noFlexWrap}`}>
                        <span>Delivery Tip</span>
                        <span className='ms-auto'>Add Tip</span>
                    </div>
                    <div className={`d-flex ${style.noFlexWrap}`}>
                        <span>Service Charge</span>
                        <span className='ms-auto'>{`${currency}${SERVICE_CHARGE}`}</span>
                    </div>
                    <hr />
                    <div className={`d-flex ${style.noFlexWrap}`}>
                        <span>TO PAY</span>
                        <span className='ms-auto'>{`${currency}${getAmountToPay(productItems, cartProducts)}`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
