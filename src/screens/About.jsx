import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import { ContentAboutUs } from '../components/Aboutus/ContentAboutUs'

export const About = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='mt-20'>
        <ContentAboutUs/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  )
}
