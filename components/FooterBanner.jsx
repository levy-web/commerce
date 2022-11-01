import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const FooterBanner = ({footerBanner: {discount, desc, largeText1,largeText2,saleTime, image, smallText,midText,product,buttonText} }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
        </div>
        <div className='right'>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>
              {buttonText}
            </button>
          </Link>
        </div>
        <img src={urlFor(image)} alt="immge" className='footer-banner-image' />

      </div>

    </div>
  )
}

export default FooterBanner