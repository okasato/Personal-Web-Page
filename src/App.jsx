import React, { Component } from 'react';
import Header from './Header';
import MyProjects from './MyProjects';
import Footer from './Footer';
import AboutMe from './AboutMe';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <MyProjects />
        <AboutMe />
        <Footer />
      </div>
    )
  }
}