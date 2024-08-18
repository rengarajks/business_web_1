import React from 'react'

function Footer() {
  return (
	<div id='contact' className='bg-slate-800 w-full text-white flex justify-between '>
        <div className='p-8'>
          Contact 
          <div>
            <div>+91 9943754090</div>
            <div>kamatchistd92@gmail.com</div>
          </div>
          
          <div className='mt-4'>
            <div>Address</div>
            Main road,ottangadu,pattukkoattai,thanjavur-614803
          </div>
        </div>

        <div className='p-8'>
            <h1>Location:</h1>
        <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.08021247780806!2d79.24466243112454!3d10.344194670493752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0005a31581d8d7%3A0xa052d27027da85a9!2z4Ka54Ka-4KaV4Kay4Ka-4KaN4KaqIOCmrOCmvuCnjeCmvuCmquCmsA!5e0!3m2!1sta!2sin!4v1692354047193!5m2!1sta!2sin"
      ></iframe>
        </div>
    </div>
  )
}

export default Footer