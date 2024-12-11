import React from 'react'

const CardImage = ({ src, alt }) => {
  return (
    <div className=''>
    <img
    src={src}
    alt={alt}
    className=" w-80 sm:w-96  lg:w-full  lg:max-w-[50rem] h-[20rem]  object-cover  ml-12 -mt-24 md:-mt-3   xl:h-[27rem]"
  />

  </div>
  )
}

export default CardImage

