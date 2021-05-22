import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/reservation"></Route> <h2>Reservation</h2>
        <Route />
        {/*         <Reservation />
         */}{' '}
        <Route path="/">
          <h2>Home</h2>
        </Route>
        {/*    <Home /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
