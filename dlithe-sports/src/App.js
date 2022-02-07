import React from 'react'
import { NewTournament } from './NewTournament'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Menu } from './Menu'
import { Home } from './Home'
import { Athlete } from './Athlete'
import { Participants } from './Participants'

const App=()=>{
  return(
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/new" exact element={<NewTournament/>}/>
          <Route path="/ath/:position" exact element={<Athlete/>}/>
          <Route path="/show/:position" exact element={<Participants/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App