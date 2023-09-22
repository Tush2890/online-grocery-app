import React from 'react';
import style from './cart.module.css';
import { Button } from '../../components/Button';

export const Cart = () => {
   return (
      <div className='d-flex gap-4 container mt-4'>
         <div className='containerLeft col-lg-8'>
            <div className={`d-flex col-lg-12 ${style.customSection}`}>
               <div className='col-lg-10'>
                  <h5>Account</h5>
                  <span>To place your order now, log in to your existing account or sign up.</span>
                  <div className='d-flex gap-4 mt-4'>
                     <button className='btn btn-outline-success px-5'>Have an account? <br /><b>LOG IN</b></button>
                     <button className='btn btn-success px-5'>New to App? <br /><b>SIGN UP</b></button>
                  </div>
               </div>
               <div className='col-lg-2 '>
                  <img src={`${process.env.PUBLIC_URL}/wrap.webp`} height={150} width={150} />
               </div>
            </div>
         </div>
         <div className={`containerRight col-lg-4 ${style.customSection}`}>
            <div className='d-flex gap-3'>
               <img src={`${process.env.PUBLIC_URL}/favicon.ico`} width={50} height={50} />
               <div className='flex-column'>
                  <h5>Burger King</h5>
                  <span>Kormangala</span>
               </div>
            </div>
            <div className='d-flex gap-2 mt-4'>
               <span>Chicken Wrapper</span>
               <div className='d-flex'>
                  <Button
                     btnClassnames={'btn-primary noBorderRadius'}
                     btnOnClick={() => ''}
                     btnText={'-'} />
                  <input type='text' className='form-control px-2 noBorderRadius w-25' value={0} readOnly={true} />
                  <Button
                     btnClassnames={'btn-primary noBorderRadius'}
                     btnOnClick={() => ''}
                     btnText={'+'} />
                  <span className='ms-4'>$200</span>
               </div>
            </div>
            <div className='mt-4'>
               <h5>Bill Details</h5>
               <div className='d-flex'>
                  <span>Item Total</span>
                  <span className='ms-auto'>$500</span>
               </div>
               <div className='d-flex'>
                  <span>Delivery Fee | 3.0 kms</span>
                  <span className='ms-auto'>$50</span>
               </div>
               <hr />
               <div className='d-flex'>
                  <span>Delivery Tip</span>
                  <span className='ms-auto'>Add Tip</span>
               </div>
               <div className='d-flex'>
                  <span>Service Charge</span>
                  <span className='ms-auto'>$15</span>
               </div>
               <hr />
               <div className='d-flex'>
                  <h5>TO PAY</h5>
                  <span className='ms-auto'>$1000</span>
               </div>
            </div>
         </div>
      </div>
   )
}
