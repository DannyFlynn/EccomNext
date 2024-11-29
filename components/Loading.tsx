"use client"
import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center lg:items-center mt-10 lg:mt-0'>
       <Oval
        height={80}
        width={80}
        color="#C7D2FE"
        visible={true} // true to show the loader
        ariaLabel="oval-loading"
        secondaryColor="#8A2BE2"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )
}

export default Loading
