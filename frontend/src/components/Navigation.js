import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          {/* <div className="container-fluid"> */}
          {/* <a className="navbar-brand" href="/">NotesApp</a> */}
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link" to="/">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Features</a> */}
                <Link className="nav-link" to="/create">
                  Create note
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Pricing</a> */}
                <Link className="nav-link" to="/user">
                  Create User
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                <Link className="nav-link active" to="/">
                  Notes
                </Link>
              </li> */}
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
    )
  }
}
