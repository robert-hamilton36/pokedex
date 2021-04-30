import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeButton from './components/Menu/HomeButton';
import { PokemonListContainer } from './components/Menu/PokemonList/PokemonListContainer'
import { OptionsContainer } from './components/Menu/OptionsContainer';
import { PokemonViewContainer } from './components/Pokemon/PokemonViewContainer';

function App() {
  return (
    <Router>
      <HomeButton/>
      <Switch>
        <Route exact path="/">
          <OptionsContainer />
          {/* <PokemonListContainer/> */}
        </Route>
        <Route path="/pokemonlist:options">
          <PokemonListContainer />
        </Route>
        <Route path="/pokemon/:pokemonId">
          <PokemonViewContainer/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
