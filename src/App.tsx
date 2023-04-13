import './App.css'
import Game from './components/Game/Game'
import { Header } from './components/Header'
import PlayerName from './components/PlayerName'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/*  / blir default (den som alltid syns) */}
          <Route path="/" element={<PlayerName />} />
          {/* <Route path="/navigation" element={<Homepage />} />
          <Route path="/openGames" element={<ListOpenGames />} /> */}
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
