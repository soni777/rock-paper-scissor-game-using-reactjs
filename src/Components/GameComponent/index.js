import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import GameContext from '../../Context/GameContext'
import GameThing from '../GameThing'
import Header from '../Header'

import {
  AppContainer,
  GameContainer,
  ResultsContainer,
  SelectedChoiceContainer,
  Choice,
  CustomButton,
  Results,
  RulesImage,
  Image,
  Game,
  CloseButton,
} from './styledComponents'

const GameComponent = () => (
  <GameContext.Consumer>
    {value => {
      const {
        choicesList,
        own,
        opponent,
        resultText,
        isStart,
        onPlayagain,
      } = value

      const onClickPlayagain = () => {
        onPlayagain()
      }

      const ReactPopup = () => (
        <Popup modal trigger={<CustomButton type="button">Rules</CustomButton>}>
          {close => (
            <>
              <RulesImage>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImage>
            </>
          )}
        </Popup>
      )

      return (
        <AppContainer>
          <Header />
          {!isStart && (
            <Game>
              <GameContainer>
                {choicesList.map(each => (
                  <GameThing key={each.id} details={each} />
                ))}
              </GameContainer>
            </Game>
          )}

          {isStart && (
            <ResultsContainer>
              <SelectedChoiceContainer>
                <Choice>
                  <h2>YOU</h2>
                  <Image src={own.imageUrl} alt="your choice" />
                </Choice>
                <Choice>
                  <h2>OPPONENT</h2>
                  <Image src={opponent.imageUrl} alt="opponent choice" />
                </Choice>
              </SelectedChoiceContainer>
              <Results>
                <p>{resultText}</p>
                <CustomButton
                  playagain
                  type="button"
                  onClick={onClickPlayagain}
                >
                  PLAY AGAIN
                </CustomButton>
              </Results>
            </ResultsContainer>
          )}
          <ReactPopup />
        </AppContainer>
      )
    }}
  </GameContext.Consumer>
)

export default GameComponent
