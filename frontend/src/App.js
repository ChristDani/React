// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/notesList';
import CreateNote from './components/createNote';
import CreateUser from './components/createUser';

function App() {
  const Edit = () => <CreateNote params={useParams()} />;
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Routes>
          <Route path="/" exact Component={NotesList} />
          {/* <Route path="/edit/:id" Component={CreateNote} /> */}
          <Route path="/edit/:id" Component={Edit} />
          <Route path="/create" Component={CreateNote} />
          <Route path="/user" Component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
