import React from 'react'
import { NewTournament } from './NewTournament'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Menu } from './Menu'
import { Home } from './Home'
import { Athlete } from './Athlete'
import { Participants } from './Participants'
import { Past } from './Past'

const App=()=>{
  return(
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/new" exact element={<NewTournament/>}/>
          <Route path="/ath/:id" exact element={<Athlete/>}/>
          <Route path="/show/:id" exact element={<Participants/>}/>
          <Route path="/completed" exact element={<Past/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App