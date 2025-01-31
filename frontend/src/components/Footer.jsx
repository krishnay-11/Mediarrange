import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*--Left Section ----*/}
        <div>
            <img className='mb-5 w-60' src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Mediarrange is your trusted partner in simplifying healthcare. Our seamless online appointment booking system connects you with skilled doctors and specialists, ensuring timely care tailored to your needs. We prioritize your privacy and security, guaranteeing that your personal information is handled with utmost care. At Mediarrange, we believe in making healthcare convenient, accessible, and reliable because your health deserves nothing less.</p>
        </div>
        {/*---- Center Section --*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
             </ul>
        </div>
        {/*--Right Section --*/}
        <div>
             <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
             <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+918764529562</li>
                <li>mediarrange@gmail.com</li>
             </ul>
        </div>
    </div>
    {/*-----Copyright text*/}
     <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright Mediarrange. All Right Reserved</p>
     </div>
    </div>
  )
}

export default Footer