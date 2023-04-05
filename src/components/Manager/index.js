import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Password from '../Password'

import './index.css'

const List = [
  {id: uuidv4(), website: 'google.com', name: 'sridhar', password: '901051'},
  {id: uuidv4(), website: 'micro.com', name: 'chinnu', password: '5555555'},
]

class Manager extends Component {
  state = {
    Items: List,
    seen: false,
    website: '',
    name: '',
    password: '',
    search: '',
  }

  Adding = event => {
    event.preventDefault()
    const {website, name, password} = this.state
    const New = {
      id: uuidv4(),
      website,
      name,
      password,
    }
    this.setState(prev => ({
      Items: [...prev.Items, New],
      website: '',
      name: '',
      password: '',
    }))
  }

  Web = event => {
    this.setState({website: event.target.value})
  }

  User = event => {
    this.setState({name: event.target.value})
  }

  Pass = event => {
    this.setState({password: event.target.value})
  }

  Text = event => {
    this.setState({search: event.target.value})
  }

  Check = () => {
    this.setState(prev => ({seen: !prev.seen}))
  }

  Delete = id => {
    const {Items} = this.state
    this.setState({Items: Items.filter(each => each.id !== id)})
  }

  render() {
    const {Items, search, seen} = this.state
    const Listing = Items.filter(each => each.name.includes(search))
    const count = Listing.length

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card">
          <form onSubmit={this.Adding}>
            <h1>Add New Password</h1>
            <div className="para">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="img"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.Web}
              />
            </div>
            <div className="para">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="img"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.User}
              />
            </div>
            <div className="para">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="img"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.Pass}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="lock"
          />
        </div>
        <div className="card2">
          <div className="head">
            <h1>Your Passwords</h1>
            <p>{count}</p>
            <div className="para">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="img"
              />
              <input type="search" onChange={this.Text} />
            </div>
          </div>
          <hr />
          <input type="checkbox" id="check" onChange={this.Check} />
          <label htmlFor="check">Show passwords</label>
          <br />
          <ul>
            {count > 0 &&
              Listing.map(each => (
                <Password
                  key={each.id}
                  item={each}
                  See={seen}
                  Delete={this.Delete}
                />
              ))}
          </ul>
          {!count > 0 && (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="lock"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Manager
