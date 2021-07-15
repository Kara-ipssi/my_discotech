import './assets/css/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Accueil from './pages/Accueil'
import Musique from './pages/Musique'
import Favoris from './pages/Favoris'

require('dotenv').config()

export default function App() {
  return (
    // on charge les pages dans app
    <Router>
        <Switch>
            {/* le routeur redirige sur une page  */}
            
            <Route path="/favoris" exact>
                <Favoris/>
            </Route>
            <Route path="/musique" exact>
                <Musique/>
            </Route>
            <Route path="/" exact>
                <Accueil/>
            </Route>
            <Redirect to="/" />
        </Switch>
    </Router>
  );
}
