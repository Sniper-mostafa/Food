import React, { useState } from 'react'
import Hero from '../components/Hero'
import ExploreList from '../components/ExploreMenu'
import FoodList from '../components/FoodList'

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div>
        <Hero />
        <ExploreList category={category} setCategory={setCategory} />
        <FoodList category={category} />
    </div>
  )
}

export default Home