import {Component} from 'react'
import GameContext from './Context/GameContext'

import './App.css'

import GameComponent from './Components/GameComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isStart: false,
    own: choicesList[0],
    opponent: choicesList[0],
    score: 0,
    resultText: '',
  }

  onChangeStart = ownData => {
    let {resultText} = this.state

    const opponentData = choicesList[Math.floor(Math.random() * 2)]
    if (ownData.id === opponentData.id) {
      this.onChangeScore(0)
      resultText = 'IT IS DRAW'
    } else if (ownData.id === 'PAPER' && opponentData.id === 'ROCK') {
      this.onChangeScore(1)
      resultText = 'YOU WON'
    } else if (ownData.id === 'SCISSORS' && opponentData.id === 'PAPER') {
      this.onChangeScore(1)
      resultText = 'YOU WON'
    } else if (ownData.id === 'ROCK' && opponentData.id === 'SCISSORS') {
      this.onChangeScore(1)
      resultText = 'YOU WON'
    } else {
      this.onChangeScore(-1)
      resultText = 'YOU LOSE'
    }

    this.setState({
      isStart: true,
      own: ownData,
      opponent: opponentData,
      resultText,
    })
  }

  onChangeScore = value => {
    this.setState(prev => ({
      score: prev.score + value,
    }))
  }

  onPlayagain = () => {
    this.setState({isStart: false})
  }

  render() {
    const {isStart, own, opponent, score, resultText} = this.state
    return (
      <GameContext.Provider
        value={{
          choicesList,
          own,
          opponent,
          score,
          resultText,
          isStart,
          onChangeStart: this.onChangeStart,
          onPlayagain: this.onPlayagain,
        }}
      >
        <GameComponent />
      </GameContext.Provider>
    )
  }
}

export default App
