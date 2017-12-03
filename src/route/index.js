import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/HomePage'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import BitlyPage from '../pages/BitlyPage'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/bitly' component={BitlyPage} />
      </Switch>
    </main>
  )
}

export default Main