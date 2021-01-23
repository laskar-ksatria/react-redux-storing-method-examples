import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import User from './views/User'
import Post from './views/Post'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
            <h1>React Redux</h1>
          </div>
        </Route>
        <Route path="/users" component={User} />
        <Route path="/posts" component={Post} />
      </Switch>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">React Redux</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/users" className="nav-link active">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link active" >Posts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default App;
