import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className='container mt-4'>
                <div className='row py-2 mt-2'>
                    <div className='col-lg-3 d-flex flex-column'>
                        <h5>BHUKKAD</h5>
                        <span>&copy; 2023 All Rights Reserved</span>
                    </div>
                    <div className='col-lg-3 d-flex flex-column'>
                        <h5>Company</h5>
                        <span className='py-2'><Link to={'/#'}>About</Link></span>
                        <span className='py-2'><Link to={'/#'}>Careers</Link></span>
                        <span className='py-2'><Link to={'/#'}>Team</Link></span>
                    </div>
                    <div className='col-lg-3 d-flex flex-column'>
                        <h5>Contact Us</h5>
                        <span className='py-2'><Link to={'/#'}>Help & Support</Link></span>
                        <span className='py-2'><Link to={'/#'}>Partner with us</Link></span>
                        <span className='py-2'><Link to={'/#'}>Ride with us</Link></span>
                        <div className='py-4'></div>
                        <h5>Legal</h5>
                        <span className='py-2'><Link to={'/#'}>Terms & Conditions</Link></span>
                        <span className='py-2'><Link to={'/#'}>Cookie Policy</Link></span>
                        <span className='py-2'><Link to={'/#'}>Privacy Policy</Link></span>
                    </div>
                    <div className='col-lg-3 d-flex flex-column'>
                        <h5>We deliver to:</h5>
                        <span className='py-2'><Link to={'/#'}>Harrow</Link></span>
                        <span className='py-2'><Link to={'/#'}>Wembley</Link></span>
                        <span className='py-2'><Link to={'/#'}>Kingsbury</Link></span>
                        <span className='py-2'><Link to={'/#'}>Northwood</Link></span>
                        <span className='py-2'><Link to={'/#'}>Hendon</Link></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}