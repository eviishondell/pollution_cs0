import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './Home';
import WhatIsIt from './whatIsIt'
import HowCanWeHelp from './howcanwehelp'
import Data from './Data'
import './index.css'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/whatIsIt' component={WhatIsIt}/>
            <Route path='/howCanWeHelp' component={HowCanWeHelp}/>
            <Route path='/data' component={Data} />
        </Switch>
    </Router>, document.getElementById('root'))
