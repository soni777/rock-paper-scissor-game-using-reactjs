import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  color: #ffffff;
  font-family: 'Bree Serif';
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Image = styled.img`
  width: 180px;
`

export const GameContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Game = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
`
export const SelectedChoiceContainer = styled.div`
  display: flex;
`

export const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CustomButton = styled.button`
  border-radius: ${props => (props.playagain ? 10 : 6)}px;
  color: #223a5f;
  border: none;
  width: ${props => (props.playagain ? 150 : 70)}px;
  height: 45px;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Bree Serif';
  align-self: ${props => (props.playagain ? 'center' : 'flex-end')};
`

export const RulesImage = styled.div`
  background-color: #ffffff;
  padding: 6px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
`
