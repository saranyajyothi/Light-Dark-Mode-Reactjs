// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: false}

  modeChange = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  buttonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const {isClicked} = this.state
    const text = this.buttonText()
    const cardsColor = isClicked
      ? 'white-card-container'
      : 'dark-card-container'
    return (
      <div className="mode-container">
        <div className={cardsColor}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.modeChange}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
