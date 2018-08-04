import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class AboutMe extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='aboutMe'>
        <div className='description'>
          <Typography align='center' variant='display2' gutterBottom>About Me</Typography>
          <Typography align='left' variant='title' color='textSecondary' gutterBottom>
            I am a software engineer based in Canada. 
          </Typography>
          <br />
          <Typography align='left' variant='title' color='textSecondary' gutterBottom>
            My passion is to create useful apps to help people. This is my ultimate goal. I like to work in a challenging, fast-paced environment.
          </Typography>
          <br />
          <Typography align='left' variant='title' color='textSecondary' gutterBottom>
            I used to work for a well known IT consulting and system development company in Tokyo. 
            As a developer and a project manager, I built and managed 2 banking systems, Shinkumi Bank and JA Bank, for about 5 years.
          </Typography>
          <br />
          <Typography align='left' variant='title' color='textSecondary' gutterBottom>
            I found it really fun and exciting being on the development side of things. That’s why I decided to focus on working as a software engineer.
          </Typography>
          <br />
          <Typography align='left' variant='title' color='textSecondary' gutterBottom>
            By applying softwares, I want to make businesses for clients more efficient and solve their problems.
          </Typography>
          <br />
          <Typography align='left' variant='title' color='textSecondary' gutterBottom>
            I love CrossFit and Aikido (martial art practiced in Japan). FRAN 7min 42sec (needs workouts more)
          </Typography>
        </div>
      </div>
    )
  }
}