import './App.css';
import React from 'react'
import Role from './components/Role/Role';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import RolesPage from './pages/RolesPage/RolesPage';
import TasksPage from './pages/TasksPage/TasksPage';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage';
import userService from './utils/userService';


let running = {
  name: 'Running',
  amount: '30 minutes',
  completed: true
}

let reading = {
  name: 'Reading',
  amount: '10 Pages',
  completed: false
}

let habits = [running, reading]



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      roles: [],
      role: "",
      user: userService.getUser()
    }
  }

  addRole = (role) => {

  }

  render() {
    return (
      <div className="App">
        <header className='header-footer'>LIFE BALANCE APP</header>
        <NavBar user={this.state.user} />
        <Switch>
          <Route exact path='/' render={() =>
            <RolesPage roles={this.state.roles} handleChange={this.handleChange} addRole={this.addRole} />
          } />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
            />
          }/>
          <Route exact path='/login' render={() => 
            <LoginPage />
          }/>
          <Route exact path='/habits' render={props => 
            <HabitsPage habits={habits} />
          } />
          <Route exact path='/tasks' render={(props) => 
            <TasksPage />
          } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
