import React from 'react'
import { Management } from '../components/Management'
import { Objectives } from '../components/Objectives'
import { Values } from '../components/Values'

export const About = () => {
  return (
    <>
      <Objectives />
      <Values />
      <Management />
    </>
  )
}
