import React from 'react'
import { NewTournament } from './NewTournament'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App=()=>{
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<h1>HOME Page</h1>}/>
          <Route path="/new" exact element={<NewTournament/>}/>
          <Route path="/old" exact element={<h1>OLD Page</h1>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App