import React from 'react'
import { NewTournament } from './NewTournament'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Menu } from './Menu'
import { Home } from './Home'

const App=()=>{
  return(
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/new" exact element={<NewTournament/>}/>
          <Route path="/old" exact element={<h1>OLD Page</h1>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App