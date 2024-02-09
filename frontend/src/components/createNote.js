import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class createNote extends Component {

  state = {
    users: [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date()
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users'); // obtenemos los datos del backend
    this.setState({ users: res.data.map(user => user.username) });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({date: date});
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>

          {/* SELECT USER */}
          <div className="form-group">
            <select className='form-control mt-2' name='userSelected' onChange={this.onInputChange}>
              {
                this.state.users.map(user =>
                  <option key={user} value={user}>
                    {
                      user
                    }
                  </option>)
              }
            </select>
          </div>

          <div className="form-group">
            <input type="text" name="title" placeholder="Title" className="form-control mt-2" required  onChange={this.onInputChange}/>
          </div>

          <div className="form-group">
            <textarea name="content" placeholder="Content" className="form-control mt-2" onChange={this.onInputChange}>

            </textarea>
          </div>

          <div className="form-group">
            <DatePicker className='form-control mt-2' selected={this.state.date} onChange={this.onChangeDate}/>
          </div>

          <form onSubmit={this.onSubmit}>

            <button type='submit' className='btn btn-primary mt-2'>
              Save
            </button>
          </form>
        </div>
      </div>
    )
  }
}
