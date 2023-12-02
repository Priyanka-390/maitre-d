import React from 'react'

import footerimg from '../assets/images/footerlogo.png'

const Footersec = () => {
    return (
        <div>
            <div className='footer-bg relative'>
                <div className="container pt-50">
                    <div className='d-flex flex-col align-items-center justify-content-center pt-60'>
                        <div className="text-center"><img className='pb-15 footer-logo' src={footerimg} alt="fooeter-img" /></div>
                        <p className='fs-14 ff-work fw-400 bs-white max-w-370 text-center mx-auto mb-35'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-50 py-30'>
                        <p className='fs-14 ff-work fw-600  bs-white'>Navigation</p>
                        <p className='fs-14 ff-work fw-600  bs-white'>Company</p>
                        <p className='fs-14 ff-work fw-600  bs-white'>Contact</p>

                    </div>
                </div>
                <div className='footer-line'></div>
                <p className='ff-work text-normal fs-12 bs-white opacity-70 text-center  py-13'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
            </div>
        </div>
    )
}

export default Footersec
