/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    emojiIds: [],
    score: 0,
    totalScore: 0,
    isGameEnd: false,
    winOrLose: false,
  }

  playAgainButton = () => {
    const {score, totalScore} = this.state
    this.setState({
      emojiIds: [],
      score: 0,
      totalScore: score > totalScore ? score : totalScore,
      isGameEnd: false,
      winOrLose: false,
    })
  }

  onClickEmoji = id => {
    console.log('here')
    const {emojiIds, score, topScore} = this.state
    const includes = emojiIds.includes(id)

    if (includes) {
      this.setState({
        emojiIds: [],
        topScore: score > topScore ? score : topScore,
        isGameEnd: true,
      })
    } else if (emojiIds.length === 11) {
      this.setState({
        emojiIds: [],
        score: score + 1,
        topScore: score + 1 > topScore ? score + 1 : topScore,
        winOrLose: true,
        isGameEnd: true,
      })
    } else {
      this.setState(prevState => ({
        emojiIds: [...prevState.emojiIds, id],
        score: score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, totalScore, isGameEnd, winOrLose} = this.state
    const jumbledList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="container">
        <NavBar addClass={winOrLose} score={score} totalScore={totalScore} />
        <div className="body-container">
          {isGameEnd ? (
            <WinOrLoseCard
              playAgainButton={this.playAgainButton}
              score={score}
              winOrLose={winOrLose}
            />
          ) : (
            <div className="emojis-container">
              <ul className="emojis-list">
                {jumbledList.map(eachEmoji => (
                  <EmojiCard
                    key={eachEmoji.id}
                    emojiDetails={eachEmoji}
                    onClickEmoji={this.onClickEmoji}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
