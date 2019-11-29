// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './shared/components/App/App';
import Characters from './shared/components/Characters/Characters';

/**
 * MainRouter component
 */
const MainRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/characters" component={Characters} />
      </div>
    </Router>
  );
};

export default MainRouter;
