import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    inputList: [],
    websiteip: '',
    usernameip: '',
    passwordip: '',
    havePasswords: false,
  }

  renderinterface1 = () => (
    <div className="interface1">
      <img
        className="image2"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no password"
      />
      <p className="para2">No Password</p>
    </div>
  )

  renderinterface2 = () => {
    const a = 1
    return (
      <li className="listitem">
        <div className="textcontainer">
          <div className="textsubcontainer">
            <div>
              <div className="icon">
                <h1 className="icontext">Y</h1>
              </div>
            </div>

            <div className="texts">
              <p className="text">Youtube</p>
              <p className="text">Rahul</p>
              <p className="text">password</p>
            </div>
          </div>
        </div>

        <div>
          <button type="button" className="itemBtn">
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }

  onSubmitEvent = event => {
    event.preventDefault()
    const {websiteip, usernameip, passwordip, havePasswords} = this.state
    const newList = {
      id: v4(),
      website: websiteip,
      username: usernameip,
      password: passwordip,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, newList],
      websiteip: '',
      usernameip: '',
      passwordip: '',
      havePasswords: !prevState.havePasswords,
    }))
  }

  onChangeWebsiteIp = event => {
    this.setState({
      websiteip: event.target.value,
    })
  }

  onChangeUsernameIp = event => {
    this.setState({
      usernameip: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordip: event.target.value,
    })
  }

  render() {
    const {websiteip, usernameip, passwordip, inputList} = this.state
    console.log(websiteip, usernameip, passwordip)
    console.log(inputList)
    return (
      <div className="container1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="bg-image"
            alt="app logo"
          />
        </div>
        <div className="container2">
          <div>
            <form className="form" onSubmit={this.onSubmitEvent}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="form-img"
                  value={websiteip}
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteIp}
                />
                <input type="text" className="input" />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="form-img"
                  value={usernameip}
                  placeholder="Enter Username"
                  onChange={this.onChangeUsernameIp}
                />
                <input type="text" className="input" />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="form-img"
                  value={passwordip}
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
                <input type="password" className="input" />
              </div>
              <div className="button-container">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="image"
              alt="password manager"
            />
          </div>
        </div>

        <div className="container3">
          <div className="headerSection">
            <div className="header">
              <h1 className="heading2">Your Password</h1>
              <p className="para">0</p>
            </div>
            <div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  className="search-img"
                  alt="search"
                />
                <input className="input" type="search" />
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="check-box-container">
            <div className="sub-container-checkbox">
              <input
                placeholder="search"
                className="check-box"
                type="checkbox"
              />
              <p className="check-box-heading">Show Password</p>
            </div>
          </div>
          <ul className="unorderedlist">
            {this.renderinterface1()}
            {this.renderinterface2()}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
