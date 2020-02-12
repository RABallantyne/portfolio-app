import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

import './dist/css/style.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </section>
      </>
    </Router>
  );
}

export default App;
