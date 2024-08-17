import React from 'react'

function HomeContent() {
  return (
    <div className='absolute  w-full'>

      <div
        className="bg-cover bg-center h-[100vh] flex justify-center items-center "
        style={{ backgroundImage: 'url(photo2.jpg)' }}
      >
        <div className='opacity-90'>
        <h1 className='text-7xl text-white font-bold'>KAMATCHI STUDIO</h1>
        <h1 className='text-xl text-white text-center '>- Kamatchi nathan</h1>
        </div>
        
      </div>
      {/* About */}
      {/* Images  */}

      <div className='h-[50vh]'>
        <h1 className='text-center font-bold my-4 mt-6 text-gray-600 text-xl'>Works</h1>

        <div className='grid grid-cols-1 gap-2 p-4 sm:grid-cols-3 '>
          <div><img src='1.jpg'/></div>
          <div><img src='2.jpg'/></div>
          <div><img src='3.jpg'/></div>
          <div><img src='4.jpg'/></div>
        </div>
      </div>

    </div>
  )
}

export default HomeContent