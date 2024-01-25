import React from 'react'
import { useState } from 'react'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'

const Home = () => {
  const [sort, setSort] = useState('');
  const [category,setCategory] = useState('');

    return (
      <div>
          <SliderComp/>
          <Sorting/>
          <div className="flex">
            <Category/>
            <Products/>
          </div>
      </div>
    )
}

export default Home