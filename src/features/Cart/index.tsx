// import React, { useEffect, useState } from 'react';
// import style from './cart.module.css';
// import { Button } from '../../components/Button';
// import { useAppDispatch, useAppSelector } from '../../redux/store';
// import { items } from '../../utils/data';
// import { productAdded, productRemoved } from '../../redux/cart.slice';

// export const Cart = () => {
//    const dispatch = useAppDispatch();
//    const [loginForm, setLoginForm] = useState(false);
//    const [signInForm, setSignInForm] = useState(false);
//    const cartProducts = useAppSelector(state => state.cart.products);
//    const deliveryFee = 50;
//    const serviceCharge = 15;
//    const getProductName = (productId: string) => {
//       const product = items.find(item => item.id === productId);
//       return product?.title;
//    }

//    const getProductPrice = (productId: string, count: number) => {
//       const product = items.find(item => item.id === productId);
//       if (product) {
//          const price = product.price.split('$')[1];
//          return parseInt(price) * count;
//       }
//       return 0;
//    }

//    const getTotalPrice = () => {
//       let totalPrice = 0;
//       cartProducts.forEach(prod => {
//          const prodPrice = getProductPrice(prod.id, prod.count);
//          totalPrice += prodPrice;
//       });
//       return totalPrice;
//    }

//    const getAmountToPay = () => {
//       return getTotalPrice() + deliveryFee + serviceCharge;
//    }

//    return (
//       <div className='row gap-4 container mt-4 mx-auto'>
//          <div className='containerLeft col-lg-7 col-md-6 col-sm-12'>
//             <div className={`row ${style.customSection}`}>
//                <div className='col-md-8 col-lg-10'>
//                   <h5>Account</h5>
//                   <span>To place your order now, log in to your existing account or sign up.</span>
//                   {
//                      loginForm && !signInForm && <div className='flex-column row mt-4'>
//                         <span className='cursor-pointer' onClick={() => {
//                            setSignInForm(true);
//                            setLoginForm(false);
//                         }}>Enter login details or <b>create an account</b></span>
//                         <input type='text' className='ms-2 form-control my-2 w-75' placeholder='Phone number' />
//                         <Button btnClassnames='ms-2 btn btn-success my-2 w-75' btnOnClick={() => ''}>LOGIN</Button>
//                         <div className='w-75'>
//                            By clicking on Login, I accept the <b> Terms & Conditions & Privacy Policy</b>
//                         </div>
//                      </div>
//                   }
//                   {
//                      signInForm && !loginForm && <div className='flex-column row mt-4'>
//                         <span className='cursor-pointer' onClick={() => {
//                            setSignInForm(false);
//                            setLoginForm(true);
//                         }}>Sign up or <b>log in to your account</b>
//                         </span>
//                         <input type='text' className='ms-2 form-control my-2 w-75' placeholder='Phone number' />
//                         <input type='text' className='ms-2 form-control my-2 w-75' placeholder='Name' />
//                         <input type='email' className='ms-2 form-control my-2 w-75' placeholder='Email' />
//                         <Button btnClassnames='ms-2 btn btn-success my-2 w-75' btnOnClick={() => ''}>CONTINUE</Button>
//                         <div className='w-75'>
//                            By clicking on Login, I accept the <b> Terms & Conditions & Privacy Policy</b>
//                         </div>
//                      </div>
//                   }
//                   {!loginForm && !signInForm && <div className='row gap-4 mt-4'>
//                      <Button btnClassnames='btn btn-outline-success col-lg-5' btnOnClick={() => setLoginForm(true)}>
//                         Have an account? <br /> <b>LOG IN</b>
//                      </Button>
//                      <Button btnClassnames='btn btn-success col-lg-5' btnOnClick={() => setSignInForm(true)}>
//                         New to App? <br /><b>SIGN UP</b>
//                      </Button>
//                   </div>}
//                </div>
//                <div className='col-md-4 col-lg-2'>
//                   <img src={`${process.env.PUBLIC_URL}/wrap.webp`} className='mt-5' height={100} width={100} />
//                </div>
//             </div>

//          </div>
//          <div className={`containerRight col-lg-4 col-md-5 col-12 ${style.customSection}`}>
//             <div className='row'>
//                <img src={`${process.env.PUBLIC_URL}/favicon.ico`} className='col-2' width={50} height={50} />
//                <div className='flex-column col-10'>
//                   <h5>Burger King</h5>
//                   <span>Kormangala</span>
//                </div>
//             </div>
//             {cartProducts.map(prod => (<div className={`row ${style.noFlexWrap} mt-4`} key={prod.id}>
//                <div className='col-3 '>{getProductName(prod.id)}</div>
//                <div className='col-5'>
//                   <div className={`row ${style.noFlexWrap} justify-content-end`}>
//                      <Button
//                         btnClassnames={'btn-primary noBorderRadius col-2 px-1'}
//                         btnOnClick={() => dispatch(productRemoved({ id: prod.id }))}
//                         btnDisabled={prod.count === 0}>-</Button>
//                      <input type='text' className='form-control noBorderRadius w-25' value={prod.count} readOnly={true} />
//                      <Button
//                         btnClassnames={'btn-primary noBorderRadius col-2 px-1'}
//                         btnOnClick={() => dispatch(productAdded({ id: prod.id }))}
//                      >+</Button>
//                   </div>
//                </div>
//                <div className='col-4 text-end'>{`$${getProductPrice(prod.id, prod.count)}`}</div>
//             </div>))}
//             <div className='mt-4'>
//                <h5>Bill Details</h5>
//                <div className={`row ${style.noFlexWrap}`}>
//                   <span className='col-10'>Item Total</span>
//                   <span className='col-2 text-end'>{`$${getTotalPrice()}`}</span>
//                </div>
//                <div className={`row ${style.noFlexWrap}`}>
//                   <span className='col-10'>Delivery Fee | 3.0 kms</span>
//                   <span className='col-2 text-end'>{`$${deliveryFee}`}</span>
//                </div>
//                <hr />
//                <div className={`row ${style.noFlexWrap}`}>
//                   <span className='col-10'>Delivery Tip</span>
//                   <span className='col-2 text-end'>Add Tip</span>
//                </div>
//                <div className={`row ${style.noFlexWrap}`}>
//                   <span className='col-10'>Service Charge</span>
//                   <span className='col-2 text-end'>{`$${serviceCharge}`}</span>
//                </div>
//                <hr />
//                <div className={`row ${style.noFlexWrap}`}>
//                   <span className='col-10'>TO PAY</span>
//                   <span className='col-2 text-end'>{`$${getAmountToPay()}`}</span>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }
import React from 'react';

export const Cart = () => {
    return <></>
}
