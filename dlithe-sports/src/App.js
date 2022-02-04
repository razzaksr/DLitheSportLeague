import React from 'react'
import { NewTournament } from './NewTournament'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Menu } from './Menu'
import { Home } from './Home'
import { Athlete } from './Athlete'

const App=()=>{
  return(
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/new" exact element={<NewTournament/>}/>
          <Route path="/ath/3" exact element={<Athlete/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App