// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, addClass} = props

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h3 className="logo-name">Emoji Game</h3>
      </div>
      {addClass ? (
        ''
      ) : (
        <div className="game-stats">
          <p className="score">Score: {score}</p>
          <p className="total-score">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
