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
        <div className='projectLocation'>
          <Project
            title={'Tim Hortons Search App'}
            image={'timhosearch.png'}
            imageTitle={'tim horotns search app'}
            jobtitle={'Full Stack Software Engineer'}
            date={'July 2018'}
            description={'After I moved to Vancouver, I was surprised that there were a ton of Tim Hortons around the city (only Vancouver and Vicoria). That\'s why I created "Tim hortons Search App" using React, Node.js, Express, PostgreSQL, Google Map API and Geolocation API. This app allows us to find Tim Hortons based on street names or where we are now (our current location). When you use your current location, the app shows a list of shops with markers in Google map within a 1 km radius of your current location.'}
            link={<div>Demo: <a href='https://timhosearch.herokuapp.com/'>https://timhosearch.herokuapp.com/</a></div>}
            github={
              <div>
                <i class="fab fa-github"></i>
                <a href='https://github.com/okasato/timhortons-search-app'>https://github.com/okasato/timhortons-search-app</a>
              </div>
            }
            technologies={'Technologies: React, Node.js, Express, Knex.js, PostgreSQL, Google Map API & Geolocation API'}
          />
          <Project
            title={'React Material-Ui Calender'}
            image={'calender.png'}
            imageTitle={'react material-ui calender'}
            jobtitle={'Frontend Software Engineer'}
            date={'June 2018'}
            description={'This is my solo project. I really wanted to implement a calendar from scrach so I created a calender using React and Material-Ui. If you put a date in the calendar, you can see your schedules of the day. In demo, clicking a date, you see "BBQ" for your plans of the day ;).'}
            link={<div>Demo: <a href='https://react-material-ui-calendar.herokuapp.com/'>https://react-material-ui-calendar.herokuapp.com/</a></div>}
            github={
              <div>
                <i class="fab fa-github"></i>
                <a href='https://github.com/okasato/React-Calendar'>https://github.com/okasato/React-Calendar</a>
              </div>
            }
            technologies={'Technologies: React & Material-Ui'}
          />
          <Project
            title={'Kovoel'}
            image={'kovoel_1.png'}
            imageTitle={'kovoel'}
            jobtitle={'Full Stack Software Engineer'}
            date={'March 2018'}
            description={'Kovoel is an app to genarate speech-to-text flash cards for learning new languages. I designed and implemented local and social (third party: Google) authentication such as the "sign in" and "sign up" features using React & Redux for frontend as well as Express, Passport.js (with OAuth 2.0) & PostgreSQL for backend. I also headed the project by confirming the current status everyday as well as addressing any pending issues with my team and sharing the goals of the day with them.'}
            github={
              <div>
                <i class="fab fa-github"></i>
                <a href='https://github.com/gerpanese/kovoel'>https://github.com/gerpanese/kovoel</a>
              </div>
            }
            technologies={'Technologies: React, Redux, Node.js, Express, Passport.js, Knex.js, PostgreSQL, Google Translation API, Web Speech API'}
          />
          <Project
            title={'Rescue Drone Q9'}
            image={'q9.png'}
            imageTitle={'rescue drone q9'}
            jobtitle={'Frontend Software Engineer'}
            date={'February 2018'}
            description={'Resque Drone Q9 is the drone delivery app for resque. I implemented "Flight Plan Creation Form" using React, Redux, Google Maps API & AirMap API. Our team presented the minimum viable product in the headquater of Rakuten AirMap.'}
            github={
              <div>
                <i class="fab fa-github"></i>
                <a href='https://github.com/cc3-team-q9/rescue-drone-q9'>https://github.com/cc3-team-q9/rescue-drone-q9</a>
              </div>
            }
            technologies={'Technologies: React, Redux, Node.js, Express, Knex.js, PostgreSQL, Google Map API, AirMap API'}
          />
          <Project
            title={
              <div>
                <div>Tough But Fun!</div>
                <div>Let's Start Learning Sorting Algorithms!</div>
              </div>
            }
            image={'meetup_2.png'}
            jobtitle={' '}
            imageTitle={'Tough But Fun! Let\'s Start Learning Sorting Algorithms!'}
            date={'February 2018'}
            description={'I talked about sorting algorithms for beginners. I briefly gave lectures on four sorting algorithms, then pseudo-code through some quizes. This meetup covered Selection Sort, Shaker Sort (Improved Bubble Sort), Heap Sort, "Inefficient" Sort.'}
            link={<a href='http://bit.ly/2ODl4el'>http://bit.ly/2ODl4el</a>}
          />
          <Project
            title={'What is happening behind APIs?'}
            image={'meetup_1.png'}
            imageTitle={'What is happening behind APIs?'}
            jobtitle={' '}
            date={'December 2017'}
            description={
              <div>
                <div>
                  In general, when developers use a public API, it can be like a black-box between clients and servers. As for myself, at the start when I started to use the API, I didn’t think of what is happening behind it. But I looked into the details and I knew that there were various technologies and tools behind APIs. At this meetup, I talked about APIs and related information. I showed what happens when we use APIs and the tools you'll need to explore. I covered the topics below:
                </div>
                <ul>
                  <li>What are APIs?</li>
                  <li>SOAP, Networks, TCP/IP, fetch, ajax, RESTetc.</li>
                  <li>Tooling (curl, postman)</li>
                  <li>How to use APIs</li>
                </ul>
              </div>
            }
            link={<a href='http://bit.ly/2vizLLE'>http://bit.ly/2vizLLE</a>}
          />
        </div> 
      </div>
    )
  }
} 