import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import GithubCorner from './GithubCorner'

const App = ({ children }) => (
  <div>
    <GithubCorner />
    <div className="container">
      <header className="header">
        <h1><Link to="/"><img src="favicon.png" /></Link><span>drop</span></h1>
        <p>CSS boilerplate use PostCSS</p>
        <div className="links">
          <Link to="/base" activeClassName="is-active">base</Link>
          |
          <Link to="/component" activeClassName="is-active">component</Link>
          |
          <Link to="/animation" activeClassName="is-active">animation</Link>
          |
          <Link to="/example" activeClassName="is-active">example</Link>
        </div>
      </header>
      <section>
        {children}
      </section>
    </div>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;