import React from 'react'

const GameContext = React.createContext({
  choicesList: {},
  isStart: true,
  own: '',
  opponent: '',
  score: 0,
  resultText: '',
  onChangeStart: () => {},
  onPlayagain: () => {},
})

export default GameContext
