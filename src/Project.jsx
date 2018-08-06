import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export default class Project extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='project'>
        <Card className='media'> 
          <CardHeader
            className='cardHeader'
            title={this.props.title}
            subheader={this.props.link}
          />
          <CardMedia
            className='image'
            image={this.props.image}
            title={this.props.imageTitle}
          />
        </Card>
        <Card className='content'>
          <CardContent>
            <Typography variant='title' color='primary'>
              {this.props.jobtitle}
            </Typography>
            <Typography variant='subheading' color='textSecondary'>
              {this.props.date}
            </Typography>
            <Typography component='p'>
              {this.props.description}
            </Typography>
            <br />
            <Typography component='p'>
              {this.props.technologies}
            </Typography>
            <br />
            <Typography component='p'>
              {this.props.github}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
