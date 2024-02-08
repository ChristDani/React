// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/notesList';
import CreateNote from './components/createNote';
import CreateUser from './components/createUser';

function App() {
  return (
    <Router>
      <Navigation/>

      <Routes>
        <Route path="/" exact Component={NotesList}/>
        <Route path="/edit/:id" Component={CreateNote}/>
        <Route path="/create" Component={CreateNote}/>
        <Route path="/user" Component={CreateUser}/>
      </Routes>
    </Router>
  );
}

export default App;
