import {Button, Image} from './styledComponents'

import GameContext from '../../Context/GameContext'

const GameThing = props => (
  <GameContext.Consumer>
    {value => {
      const {onChangeStart} = value
      const {details} = props
      const {id, imageUrl} = details
      const onGameStart = () => {
        onChangeStart(details)
      }
      return (
        <Button
          type="button"
          data-testid={`${id.toLowerCase()}Button`}
          onClick={onGameStart}
        >
          <Image src={imageUrl} alt={id} />
        </Button>
      )
    }}
  </GameContext.Consumer>
)

export default GameThing
