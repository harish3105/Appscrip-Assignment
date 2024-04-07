import React from 'react';
import Logo from "../Assests/Logo.png";
import usa from "../Assests/usa.png";
import { FaSearch, FaShoppingBag, FaUser, FaHeart, FaDotCircle } from 'react-icons/fa';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


function Footer() {
    const [show, setShow]=useState(false)
    const [quick, setQuick]=useState(false)
    const [follow, setFollow]=useState(false)

   
    return (
        <>
            <div className='w-full h-fit bg-black flex lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full h-full flex flex-col text-white lg:space-y-16 space-y-12 lg:pl-36 pl-4 lg:py-24 py-8'>
                    <div className='space-y-6'>
                        <h2 className='lg:text-3xl text-xl font-bold'>BE THE FIRST TO KNOW</h2>
                        <p className='lg:text-lg text-sm'>Sign up for updates metta muse</p>
                    </div>
                    <div className='flex gap-2'>
                        <input className='border-2 bg-white lg:w-96 w-44 lg:h-16 h-12' type='text' placeholder='Enter your e-mail...'></input>
                        <button className='bg-black border-2 lg:w-40 w-28 lg:h-16 h-12'>Subscribe</button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full h-full flex flex-col text-white space-y-8 lg:px-36 px-4 lg:py-16 py-4'>
                    <div className='space-y-2'>
                        <h2 className='lg:text-3xl text-xl font-bold'>CONTACT US</h2>
                        <p className='lg:text-lg text-sm'>+44 221 133 5360</p>
                        <p className='lg:text-lg text-sm'>customercare@mettamuse.com</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='lg:text-3xl text-xl font-bold'>CURRENCY</h2>
                        <div className='flex items-center gap-2'>
                            <img className='lg:h-12 h-8 lg:w-12 w-8 rounded-full' src={usa} alt="icon" />
                            <FaDotCircle />
                            <p className='lg:text-3xl text-xl font-bold'>USA</p>
                        </div>
                        <p className='lg:text-lg text-sm'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className='w-full h-fit bg-black flex lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full h-full flex justify-between lg:flex-row flex-col lg:space-y-0 space-y-8 text-white  lg:pl-36 pl-4 lg:py-12 py-8'>
                    <div className='space-y-6'>
                        <div className='flex justify-between pr-4'>
                            <h1 className='lg:text-3xl text-xl font-bold'>metta muse</h1>
                            <p className='lg:hidden block' onClick={() => setShow(!show)}><FaAngleDown/></p>
                        </div>
                        <ul className='space-y-3 lg:block hidden'>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        {show &&
                            <div>
                            <ul className='space-y-3 '>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        </div>}
                    </div>
                    <div className='lg:hidden block h-0.5 w-11/12 bg-white'>

                    </div>
                    <div className='space-y-6'>
                    <div className='flex justify-between pr-4'>
                            <h1 className='lg:text-3xl text-xl font-bold'>QUICK LINKS</h1>
                            <p className='lg:hidden block' onClick={() => setQuick(!quick)}><FaAngleDown/></p>
                        </div>
                        <ul className='space-y-3 lg:block hidden'>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        {quick &&
                            <div>
                            <ul className='space-y-3 '>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        </div>}
                    </div>
                </div>
                <div className='lg:hidden block h-0.5 w-11/12  bg-white mx-auto'>

                </div>
                <div className='lg:w-1/2 w-full h-full flex flex-col text-white space-y-16 lg:px-36 px-4 lg:py-12 py-0 lg:mt-0 mt-6'>
                    <div className='space-y-6'>
                    <div className='flex justify-between'>
                            <h1 className='lg:text-3xl text-xl font-bold'>FOLLOW US</h1>
                            <p className='lg:hidden block' onClick={() => setFollow(!follow)}><FaAngleDown/></p>
                        </div>
                        <div className='lg:flex gap-2 hidden'>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <FaHeart/>
                            </div>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <FaHeart/>
                            </div>
                        </div>
                        {follow &&
                            <div className='flex gap-2'>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <FaHeart/>
                            </div>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <FaHeart/>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='lg:hidden block h-0.5 w-full bg-white mx-auto'>

                    </div>
                    <div className='space-y-4 ' >
                        <h2 className='lg:text-2xl text-xl font-bold'>metta muse ACCEPTS</h2>
                        <div className='flex gap-2'>
                            <img src={Logo} alt="icon" className='h-8 w-24 rounded-lg' />
                            <img src={Logo} alt="icon" className='h-8 w-24 rounded-lg' />
                            <img src={Logo} alt="icon" className='h-8 w-24 rounded-lg' />
                            <img src={Logo} alt="icon" className='h-8 w-24 rounded-lg' />
                            <img src={Logo} alt="icon" className='h-8 w-24 rounded-lg' />
                            <img src={Logo} alt="icon" className='h-8 w-24 rounded-lg' />
                        </div>
                    </div>
                    
                </div>
                

            </div>
                <div className='w-full h-12 flex items-center justify-center bg-black lg:px-0 px-2 text-center py-8'>
                    <p className='text-white lg:text-lg text-sm'> Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>

        </>
    );
}

export default Footer;

{/* <footer style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px', width: '100vw' }}>


    <div style={{ display: 'flex', flexDirection: 'column', width: '50vw', padding: '80px 50px', }}>
        <h2>BE THE FIRST TO KNOW</h2>
        <p>Sign up for updates metta muse</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="email" placeholder="Enter your e-mail..." style={{ padding: '5px', marginRight: '10px', border: 'none', height: '30px', width: '350px', borderRadius: '5px' }} />
            <button style={{ padding: '5px 10px', backgroundColor: '#000000', color: '#fff', borderColor: '#ffffff', borderRadius: '5px', height: '40px', width: '130px' }}>Subscribe</button>
        </div>
    </div>

    <div style={{ width: '50vw', padding: '0px 50px' }}>
        <h3>CONTACT US</h3>
        <p>Sign up for updates from mettā muse.</p>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
        <h3>Currency</h3>
        <div style={{ display: 'flex', alignItems: 'center', height: '30px' }}>
            <img src={Logo} alt="icon" style={{ width: '30px', height: '30px' }} />
            <p style={{ paddingLeft: '10px', fontSize: '30px' }}>USD</p>
        </div>
        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
    </div>
</div>
<div style={{ padding: '0px 30px' }}>
    <hr></hr>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width:'100vw' }}>
    <div style={{width:'50vw', display:'flex', justifyContent:'space-between' }}>
        <div style={{paddingLeft:'50px'}}>
            <h3>mettā muse</h3>
            <ul>
                <li className='text-red-700'>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
                <li>Join as a Seller</li>
            </ul>
        </div>
        <div style={{paddingRight:'50px'}}>
            <h3>Quick Links</h3>
            <ul >
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
    </div>
    <div style={{ width: '50vw', paddingLeft:'100px' }}>
        <h3>FOLLOW US</h3>
        <div style={{display:'flex'}}>
            <div style={{width:'30px', height:'30px', borderRadius:'100%', borderColor:'#000000', border:'1px solid black', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <FaHeart/>
            </div>
            <div style={{width:'30px', height:'30px', borderRadius:'100%', borderColor:'#000000', border:'1px solid black', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'5px'}}>
                <FaHeart/>
            </div>
        </div>
        <div style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
            <h3>FOLLOW US</h3>
            <div style={{display:'flex'}}>
                <img src={Logo} alt="icon" style={{ width: '30px', height: '30px' }} />
            </div>
        </div>
    </div>
</div>
<p style={{ textAlign: 'center' }}>Copyright © 2023 mettamuse. All rights reserved.</p>
</footer> */}