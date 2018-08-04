import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ContactMe from './ContactMe';

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='footer'>
        <Typography align='center' variant='headline' color='textSecondary' gutterBottom>
          Let's get in touch with Facebook or Linkedin. You can check code and articles about my past projects in GitHub and Medium.
        </Typography>
        <ContactMe />
        <Typography align='center' variant='caption' color='inherit' gutterBottom>
          <i className="material-icons md-9">copyright</i>
          <span>&nbsp;</span>
          2018
          shingokonnai.com
        </Typography>
      </div>
    )
  }
} 