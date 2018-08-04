import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Project from './Project';

export default class MyProjects extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='myProjects'>
        <Typography align='center' variant='display2' gutterBottom>Here's what I've done so far</Typography>
        <Project
          title={'Tim Hortons Search App'}
          image={'timhosearch.png'}
          imageTitle={'tim horotns search app'}
          jobtitle={'Full Stack Software Engineer'}
          date={'July 2018'}
          description={'After I moved to Vancouver, I was surprised that there were a ton of Tim Hortons around the city (only Vancouver and Vicoria). That\'s why I created "Tim hortons Search App" using React, Node.js, Express, PostgreSQL, Google Map API and Geolocation API. This app allows us to find Tim Hortons based on street names or where we are now (our current location). When you use your current location, the app shows a list of shops with markers in Google map within a 1 km radius of your current location.'}
          link={<div>Demo: <a href='https://timhosearch.herokuapp.com/'>https://timhosearch.herokuapp.com/</a></div>}
          github={<a href='https://github.com/okasato/timhortons-search-app'>https://github.com/okasato/timhortons-search-app</a>}
          technologies={'React, Node.js, Express, Knex.js, PostgreSQL, Google Map API & Geolocation API'}
        />
        <Project
          title={'React Material-Ui Calender'}
          image={'calender.png'}
          imageTitle={'react material-ui calender'}
          jobtitle={'Frontend Software Engineer'}
          date={'June 2018'}
          description={'This is my self-project. I created a calender using React and Material-Ui. If you put a date in the calendar, you can see your schedules of the day. In demo, clicking a date, you see "BBQ" for your plans of the day ;).'}
          link={<div>Demo: <a href='https://react-material-ui-calendar.herokuapp.com/'>https://react-material-ui-calendar.herokuapp.com/</a></div>}
          github={<a href='https://github.com/okasato/React-Calendar'>https://github.com/okasato/React-Calendar</a>}
          technologies={'React & Material-Ui'}
        />
        <Project
          title={'Kovoel'}
          image={'kovoel_1.png'}
          imageTitle={'kovoel'}
          jobtitle={'Full Stack Software Engineer'}
          date={'March 2018'}
          description={'Kovoel is an app to genarate speech-to-text flash cards for learning new languages. I designed and implemented local and social (third party: Google) authentication such as the "sign in" and "sign up" features using React & Redux for frontend as well as Express, Passport.js (with OAuth 2.0) & PostgreSQL for backend. I also headed the project by confirming the current status everyday as well as addressing any pending issues with my team and sharing the goals of the day with them.'}
          github={<a href='https://github.com/gerpanese/kovoel'>https://github.com/gerpanese/kovoel</a>}
          technologies={'React, Redux, Node.js, Express, Passport.js, Knex.js, PostgreSQL, Google Translation API, Web Speech API'}
        />
        <Project
          title={'Resque Drone Q9'}
          image={'q9.png'}
          imageTitle={'resque drone q9'}
          jobtitle={'Frontend Software Engineer'}
          date={'February 2018'}
          description={'Resque Drone Q9 is the drone delivery app for resque. I implemented "Flight Plan Creation Form" using React, Redux, Google Maps API & AirMap API. Our team presented the minimum viable product in the headquater of Rakuten AirMap.'}
          github={<a href='https://github.com/cc3-team-q9/rescue-drone-q9'>https://github.com/cc3-team-q9/rescue-drone-q9</a>}
          technologies={'React, Redux, Node.js, Express, Knex.js, PostgreSQL, Google Map API, AirMap API'}
        />
      </div>
    )
  }
} 