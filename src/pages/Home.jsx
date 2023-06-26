import React from 'react'
import { Hero } from '../components/Hero'
import { WhyUs } from '../components/WhyUs'
import { Mission } from '../components/Mission'
import { Partners } from '../components/Partners'

export const Home = () => {
  return (
    <div>
        <Hero />
        <WhyUs />
        <Mission />
        <Partners />
    </div>
  )
}
