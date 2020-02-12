import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ProjectsMain from './components/portfolio/ProjectsMain';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/projects' component={ProjectsMain} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </section>
      </>
    </Router>
  );
}

export default App;
