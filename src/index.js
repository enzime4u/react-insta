import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "./styles.css"
import LoginComponent from './containers/LoginComponent'
import ForgotPassword from './containers/ForgotPassword'
import Register from './containers/Register'
import Navigation from './components/Navigation'
import Feed from './containers/FeedContainer'


const data = [
  {
    name: 'Liviu',
    email: 'me@me.com',
    password: '123456',
    profile_image: 'https://via.placeholder.com/50',
    upload_image: ['https://via.placeholder.com/300'],
  },
  {
    name: 'Alex',
    email: 'alex@me.com',
    password: 'password',
    profile_image: 'https://via.placeholder.com/50',
    upload_image: ['https://via.placeholder.com/300']
  }
]


const App = (props) => {
  return (
    <div className="App">
      <Router>
      <Navigation />
      {/* <Router>
        <Route exact path='/' component={LoginComponent} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={ForgotPassword} />
      </Router> */}
      
        <Feed />
      
      </Router>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

