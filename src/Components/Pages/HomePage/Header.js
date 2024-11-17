import React from 'react';
import headerImg from '../../../Assets/headerimg.png' 
import iconh5 from '../../../Assets/iconheader3.png'
import iconimg from '../../../Assets/iconheader2.png'
import iconimg2 from '../../../Assets/iconheader4.png'
import iconimg3 from '../../../Assets/iconheader1.png'
import iconimg5 from '../../../Assets/iconheader5.png'
import background2 from '../../../Assets/backgroundheader.png'
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='first-sec col-md-6 col-lg-6'>
                        <img src={iconh5 } className='icon1' alt='icon'/>
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <img src={iconimg3} className='iconimg3' alt='' />
                        <button><a href='#s'> Read More</a></button>
                        <img src={iconimg2} className='iconimg2' alt='' />
                        
                    </div>
                    <div className='col-md-6 col-lg-6'>
                        <div className='header-box'>
                            <img src={headerImg} className='img1' alt='headerImg' />
                            <img src={iconimg} className='iconimg' alt='' />
                            <img src={iconimg5} className='iconimg5' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            <img src={background2} className='background2' alt=''/>
        </header>
    );
}
export default Header;