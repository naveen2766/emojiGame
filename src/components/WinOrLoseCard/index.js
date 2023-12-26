// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, playAgainButton} = props
  const playAgainButtonClick = () => {
    playAgainButton()
  }
  if (winOrLose) {
    return (
      <div className="winLoss-container">
        <div className="game-score">
          <h1>You Won</h1>
          <div className="score-container">
            <p>Best Score</p>
            <p className="score-outOf-12">{score}/12</p>
            <button
              type="button"
              className="playAgain-button"
              onClick={playAgainButtonClick}
            >
              Play Again
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="winLoss-img"
        />
      </div>
    )
  }
  return (
    <div className="winLoss-container">
      <div className="game-score">
        <h1 className="your-heading">You Lose</h1>
        <div className="score-container">
          <p>Score</p>
          <p className="score-outOf-12">{score}/12</p>
        </div>
        <button
          type="button"
          className="playAgain-button"
          onClick={playAgainButtonClick}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
