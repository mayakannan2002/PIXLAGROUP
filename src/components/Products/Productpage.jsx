import React from 'react'
import DivisionHeader from './../Navbar'
import Digitalgold from './Digitalgold'
import GoldBullion from './Goldbullion'
import GoldJewellery from './Goldjewellery'
import GoldLoans from './Goldloan'
import MetalLoans from './Metalloan'
import Oldgold from './Oldgold'


const Productpage = () => {
  return (
    <div>
      <DivisionHeader/>
      <Digitalgold/>
      <GoldBullion/>
      <GoldJewellery/>
      <GoldLoans/>
      <MetalLoans/>
      <Oldgold/>
      
    </div>
  )
}

export default Productpage
