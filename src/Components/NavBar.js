import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div id='home' class='fixed top-0 flex justify-between items-center p-2 w-full bg-white/60 z-[10]'>

        <div className=''>
          <a href='https://www.facebook.com/kamachi.nathan.73'><FacebookIcon/></a>
          <a href='https://www.instagram.com/kamachivideos/'><InstagramIcon/></a>
          <a href='mailto:kamatchistd92@gmail.com'><EmailIcon/></a>
        </div>

        <div className='flex w-1/4 justify-between font-bold'>
          <div>
            <Link to={'/'}><span>Home</span></Link>
          </div>

          <div>
            <a href="#about_sec">About</a>
          </div>


          <div>
          <a href="#contact">Contact</a>
          </div>


          <div>
            <Link to={'/login'}><span>Login</span></Link>
          </div>
        </div>

        <div>
          <Avatar/>
        </div>


    </div>
  )
}

export default NavBar