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
        <PlayerName />
        <Game />
      </BrowserRouter>
    </>
  )
}

export default App
