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
    date: new Date(),
    editing: false,
    _id: ''
  }

  async componentDidMount() {
    this.getUsers();
    
    if (this.props && this.props.params) {
      const idNote = this.props.params.id

      if (idNote) {
        const noteRQ = await axios.get(`http://localhost:4000/api/notes/${idNote}`);
        this.setState({
          title: noteRQ.data.title,
          content: noteRQ.data.content,
          date: new Date(noteRQ.data.date),
          userSelected: noteRQ.data.author,
          editing: true,
          _id: idNote
        })
      }
    }
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users'); // obtenemos los datos del backend
    this.setState({
      users: res.data.map(user => user.username),
      userSelected: res.data[0].username
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: new Date(Date.UTC(this.state.date)),
      author: this.state.userSelected
    };
    if (this.state.editing) {
      await axios.put(`http://localhost:4000/api/notes/${this.state._id}`, newNote)
    }
    else {
      await axios.post('http://localhost:4000/api/notes', newNote);
    }
    window.location.href = '/';
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({ date });
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>{this.state.editing ? "Edit Note" : "Create Note" }</h4>

          {/* SELECT USER */}
          <div className="form-group">
            <select className='form-control mt-2' name='userSelected' onChange={this.onInputChange} value={this.state.userSelected}>
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
            <input type="text" name="title" placeholder="Title" className="form-control mt-2" required onChange={this.onInputChange} value={this.state.title}/>
          </div>

          <div className="form-group">
            <textarea name="content" placeholder="Content" className="form-control mt-2" onChange={this.onInputChange} value={this.state.content}>

            </textarea>
          </div>

          <div className="form-group">
            <DatePicker className='form-control mt-2' name="date" selected={this.state.date} onChange={this.onChangeDate} />
          </div>

          <form onSubmit={this.onSubmit}>

            <button type='submit' className='btn btn-primary mt-2'>
            {this.state.editing ? "Edit" : "Save" }
            </button>
          </form>
        </div>
      </div>
    )
  }
}
