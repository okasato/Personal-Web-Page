import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import ContactMe from './ContactMe';

export default class AboutUs extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='header'>
        <Typography className='headline' align='center' variant='display1' color='textSecondary' gutterBottom>Hello, I'm</Typography>
        <Typography align='center' variant='display3' color='textSecondary' gutterBottom>Shingo Konnai</Typography>
        <ContactMe />
      </div>
    )
  }
} 