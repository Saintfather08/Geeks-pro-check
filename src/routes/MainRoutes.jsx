import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PokemonCard from '../components/card/PokemonCard'
import PokemonPage from '../pages/PokemonPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonPage />} />
      <Route path="/characters" element={<PokemonCard />} />
    </Routes>
  )
}

export default MainRoutes