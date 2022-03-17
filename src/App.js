import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  ScoreRowFlexContainer,
  ListColumnFlexContainer,
  ListItem,
  ScoreColumnFlexContainer,
  Score,
  ScoreValue,
  ImagesRowcontainer,
  ImageButton,
  Image,
  RulesContainer,
  RulesButton,
  RulesRowFlexContainer,
  CloseButton,
  ColumnFlexContainer,
  RowFlexContainer,
  Result,
} from './appStyles'

import './App.css'

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

const statusList = {
  playing: 'PLAYING',
  win: 'WIN',
  draw: 'DRAW',
  lose: 'LOSE',
}

class App extends Component {
  state = {
    score: 0,
    playingStatus: statusList.playing,
    userSelection: '',
    computerSelection: '',
  }

  userSelection = userSelection => {
    const {score} = this.state
    const winScore = score + 1
    const loseScore = score - 1

    const randNum = Math.floor(Math.random() * 3)
    const computerSelection = choicesList[randNum].id
    this.setState({userSelection, computerSelection})

    if (userSelection === computerSelection) {
      this.setState({playingStatus: statusList.draw})
    } else if (userSelection === 'ROCK') {
      if (computerSelection === 'PAPER') {
        this.setState({playingStatus: statusList.lose, score: loseScore})
      } else {
        this.setState({playingStatus: statusList.win, score: winScore})
      }
    } else if (userSelection === 'SCISSORS') {
      if (computerSelection === 'ROCK') {
        this.setState({playingStatus: statusList.lose, score: loseScore})
      } else {
        this.setState({playingStatus: statusList.win, score: winScore})
      }
    } else if (userSelection === 'PAPER') {
      if (computerSelection === 'SCISSORS') {
        this.setState({playingStatus: statusList.lose, score: loseScore})
      } else {
        this.setState({playingStatus: statusList.win, score: winScore})
      }
    }
  }

  renderPlaying = () => (
    <ImagesRowcontainer>
      {choicesList.map(eachItem => (
        <ImageButton
          data-testid={`${eachItem.id.toLowerCase()}Button`}
          key={eachItem.id}
          alt={eachItem.id}
          value={eachItem.id}
          onClick={() => this.userSelection(eachItem.id)}
        >
          <Image src={eachItem.imageUrl} alt="your choice" />
        </ImageButton>
      ))}
    </ImagesRowcontainer>
  )

  restartGame = () => {
    this.setState({playingStatus: statusList.playing})
  }

  renderResult = () => {
    const {playingStatus, userSelection, computerSelection} = this.state
    const playerChoiceImage = choicesList.find(
      eachItem => eachItem.id === userSelection,
    ).imageUrl

    const systemChoiceImage = choicesList.find(
      eachItem => eachItem.id === computerSelection,
    ).imageUrl

    let result = ''
    switch (playingStatus) {
      case statusList.win:
        result = 'YOU WON'
        break
      case statusList.draw:
        result = 'IT IS DRAW'
        break
      default:
        result = 'YOU LOSE'
    }

    return (
      <ColumnFlexContainer>
        <RowFlexContainer>
          <ColumnFlexContainer>
            <ListItem as="p">YOU</ListItem>
            <Image src={playerChoiceImage} alt="your choice" />
          </ColumnFlexContainer>
          <ColumnFlexContainer>
            <ListItem as="p">OPPONENT</ListItem>
            <Image src={systemChoiceImage} alt="opponent choice" />
          </ColumnFlexContainer>
        </RowFlexContainer>
        <Result as="p">{result}</Result>
        <RulesButton onClick={this.restartGame}>PLAY AGAIN</RulesButton>
      </ColumnFlexContainer>
    )
  }

  rules = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
      alt="rules"
    />
  )

  render() {
    const {score, playingStatus} = this.state
    return (
      <MainContainer>
        <ScoreRowFlexContainer>
          <ListColumnFlexContainer>
            <ListItem as="h1">Rock Paper Scissors</ListItem>
          </ListColumnFlexContainer>
          <ScoreColumnFlexContainer>
            <Score as="p">Score</Score>
            <ScoreValue as="p">{score}</ScoreValue>
          </ScoreColumnFlexContainer>
        </ScoreRowFlexContainer>
        {playingStatus === statusList.playing && this.renderPlaying()}
        {playingStatus !== statusList.playing && this.renderResult()}
        <RulesContainer>
          <Popup
            modal
            trigger={
              <RulesButton type="button" className="trigger-button">
                Rules
              </RulesButton>
            }
          >
            {close => (
              <RulesRowFlexContainer>
                {this.rules()}
                <CloseButton
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </CloseButton>
              </RulesRowFlexContainer>
            )}
          </Popup>
        </RulesContainer>
      </MainContainer>
    )
  }
}

export default App
