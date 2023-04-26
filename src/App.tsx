import './App.css'
import Game from './components/Games/Rps'
import { Header } from './components/Header'
import PlayerName from './components/PlayerName'
import Homepage from './components/Homepage'
import ListOpenGames from './components/ListOpenGames'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/*  / blir default (den som alltid syns först) */}
          <Route path="/" element={<PlayerName />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/openGames" element={<ListOpenGames />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
