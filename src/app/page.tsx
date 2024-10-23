import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <h1 className='bg-yellow-400 text-center text-2xl text-red-600 text-5xl py-4 mt-4 border-orange-600'>DILPASNAD SWEETS AND BAKERS</h1>
    <Navbar/>
    <section className='bg-pink-600 h-60'>
        <p className=' text-white px-9 py-5 text-2xl'>
        DILPASAND Sweets & Bakers is one of the pioneers of Pakistan’s Sweet Mart Industry. Our Legacy of finest quality products and remarkable services dates back to 1957.
        </p>
        <Image
        src="/OIP.jpeg"
        alt='gulam jamun'
        className='rounded-md'
        width={150}
        height={150}
        />
    </section>
    <section className='bg-lime-400'>
      <p>
      Dilpasand was established on a very small scale by Haji Ahmed Mian in the year 1957. But as a product of our untiring efforts, desire for the highest quality, professional dedication, selection of the finest ingredients, best skilled labor and innovations in the mode of packing, Dilpasand progressed remarkably and blossomed to its present standing of unmatched prestige.
      <Image
      src="/istockphoto-1194662949-612x612.jpg"
      alt='gulab'
      className='rounded-lg'
      height={150}
      width={150}
      />
      </p>
    </section>
    <Footer/>
    </div>
  )
}

export default Home