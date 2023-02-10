import {ScoreBoard, Score, Nav, Heading} from './styledComponents'

import GameContext from '../../Context/GameContext'

const Header = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value

      return (
        <Nav>
          <div>
            <Heading>Rock Paper Scissors</Heading>
            {/* <h3>PAPER</h3>
            <h3>SCISSORS</h3> */}
          </div>
          <ScoreBoard>
            <p>Score</p>
            <Score>{score}</Score>
          </ScoreBoard>
        </Nav>
      )
    }}
  </GameContext.Consumer>
)

export default Header
