import React, { Component,lazy,Suspense } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

// import Home from './components/2_lazyLoad/Home'
// import About from './components/2_lazyLoad/About'
const Home = lazy(()=>import('./components/2_lazyLoad/Home'))
const About = lazy(()=>import('./components/2_lazyLoad/About'))

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink to="/about" className="list-group-item">About</NavLink>
              <NavLink to="/home" className="list-group-item">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<h1>loading...</h1>}>
                  <Switch>
                    <Route exact={true} path="/about" component={About} />
                    <Route path="/home" component={Home} />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}