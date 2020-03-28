import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PickedShow from './pages/PickedShow'

const App = () => {
  return (
    <Router>
      <nav>
        <Link className="homelink" to="/">
          Top 20 TV Shows
        </Link>
      </nav>
      <header>
        <h1 className="title">Top-Rated TV Shows</h1>
        <h1>Entertainment for the Quarantine</h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv/:id" component={PickedShow} />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
