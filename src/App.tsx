import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { PokemonListContainer } from './components/pokemon/PokemonListContainer'
import { PokemonViewContainer } from './components/pokemon/PokemonViewContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonListContainer/>
        </Route>
        <Route path="/pokemon/:pokemonId">
          <PokemonViewContainer/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
