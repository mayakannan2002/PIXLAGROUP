import React from 'react'
import DivisionHeader from './../Navbar'
import Divisionhero from './Divisionhero'
import OurDivisions from '../Home/Division'
import EcoSystemSection from './Ecosystem'

const Divisionpage = () => {
  return (
    <div>
      <DivisionHeader/>
      <Divisionhero/>
      <OurDivisions/>
      <EcoSystemSection/>
    </div>
  )
}

export default Divisionpage
