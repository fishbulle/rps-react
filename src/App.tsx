import './App.css'
import rock from './assets/rock.png'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'

function App() {


  return (
    <>
      <div id="icons">
        <img id="rock" src={rock}></img>
        <img id="paper" src={paper}></img>
        <img id="scissors" src={scissors}></img>
      </div>

      <div id="choice">
        <p>ROCK PAPER SCISSORS</p>
      </div>
    </>
  )
}

export default App
