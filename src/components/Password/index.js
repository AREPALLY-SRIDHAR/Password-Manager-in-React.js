import './index.css'

const Password = props => {
  const {item, See, Delete} = props
  const {id, website, name, password} = item

  const Sub = () => {
    Delete(id)
  }

  return (
    <li>
      <div>
        <p>{website}</p>
        <p>{name}</p>
        {See && <p>{password}</p>}
        {!See && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="stars"
            className="art"
          />
        )}
      </div>
      <button type="button" className="hi" onClick={Sub} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="btn"
        />
      </button>
    </li>
  )
}

export default Password
