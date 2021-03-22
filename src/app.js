import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './presentation/pages/home';
import Perfil from './presentation/pages/perfil';
import Header from './presentation/components/header';
import ActionProvider from './domain/usecases/search-user';

const App = () => {
  return (
    <ActionProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ActionProvider>
  );
};

export default App;
