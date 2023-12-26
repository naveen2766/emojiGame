// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const clickedEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="each-emoji">
      <button type="button" className="emoji-button" onClick={clickedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
