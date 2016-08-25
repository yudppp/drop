import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute,IndexRedirect, hashHistory } from 'react-router';
import App from './components/App';
import Top from './components/Top';
import Base from './components/Base';
import Component from './components/Component';
import Animation from './components/Animation';
import Example from './components/Example';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      // <IndexRoute component={Top} />
      <IndexRedirect to="/example" />
      <Route path="/base" component={Base} />
      <Route path="/component" component={Component} />
      <Route path="/animation" component={Animation} />
      <Route path="/example" component={Example} />
    </Route>
  </Router>), document.getElementById('content')
);