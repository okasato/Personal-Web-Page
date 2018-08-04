import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default class ContactMe extends Component {
  constructor(props) {
    super(props)
  }

  handleClickFB(e) {
    e.preventDefault();
    window.open('https://www.facebook.com/shingo.konnai');
  }

  handleClickLinkedin(e) {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/shingokonnai/');
  }

  handleClickGitHub(e) {
    e.preventDefault();
    window.open('https://github.com/okasato');
  }

  handleClickMedium(e) {
    e.preventDefault();
    window.open('https://medium.com/@k1ckap0l03');
  }

  render() {
    return (
      <div className='contactMe'>
        {/* <Typography align='center' variant='title' color='textSecondary' gutterBottom>
          <a href='mailto:shingokonnai@gmail.com'>shingokonnai@gmail.com</a>
        </Typography> */}
        <ui className='contact'>
          <li>
            <Typography align='center' variant='display1' color='textSecondary' gutterBottom>
              <IconButton onClick={e => this.handleClickFB(e)}>
                <i class="fab fa-facebook-square fa-2x"></i>                
              </IconButton>
            </Typography>
          </li>
          <li>
            <Typography align='center' variant='display1' color='textSecondary' gutterBottom>
              <IconButton onClick={e => this.handleClickLinkedin(e)}>
                <i class="fab fa-linkedin fa-2x"></i>
              </IconButton>
            </Typography>
          </li>
          <li>
            <Typography align='center' variant='display1' color='textSecondary' gutterBottom>
              <IconButton onClick={e => this.handleClickGitHub(e)}>
                <i class="fab fa-github fa-2x"></i>
              </IconButton>
            </Typography>
          </li>
          <li>
            <Typography align='center' variant='display1' color='textSecondary' gutterBottom>
              <IconButton onClick={e => this.handleClickMedium(e)}>
                <i class="fab fa-medium fa-2x"></i>
              </IconButton>
            </Typography>
          </li>
        </ui>
      </div>
    )
  }
} 