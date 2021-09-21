import logo from './logo.svg';
import './App.css';
import tutorialsData from './tutorials.json';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}
function Header() {
  return (
    <header class="">
      <div class="nav">
        <h3>That Js Dude</h3>
        <button class="sign-in">Sign In</button>
      </div>
      <div class="header-main">
        <h1>Exclusive React Workshop for beginners!</h1>
        <p>Once in a year opportunity to learn and build your <a href="">first React app</a></p>
        <button class="details">Learn more >></button>
      </div>
    </header>
  )
}
function Main() {
  return (
    <section className='main'>
      <Left></Left>
      <Right></Right>
    </section>
  )
}
function Left() {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    setTutorials(tutorialsData)
  }, [])
  return (
    <div className="left">
      <JsConfig></JsConfig>
      <div id="tutorial-container">
        {
          tutorials.map(tutorial => <Tutorial title={tutorial.title} description={tutorial.description}></Tutorial>)
        }
      </div>
    </div>
  )
}
function Tutorial(props) {
  return (
    <div class="tutorial">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <button class="details">View details>></button>
    </div>
  )
}
function JsConfig() {
  return (
    <div className="js-config">
      <h4>JS Confusing Parts</h4>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event
        delegation, dom, timers and many more caveats.</p>
    </div>
  )
}
function Right() {
  return (
    <div className="right">
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
      <RecentTalk></RecentTalk>
      <InviteToTalk></InviteToTalk>
    </div>
  )
}
function PersonalTraining() {
  return (
    <div id="personal-training">
      <h2>Personal Training for $30</h2>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything
        else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book
        a time slot You can Book me</p>
    </div>
  )
}
function RecentVideos() {
  return (
    <div id="recent-videos">
      <h2>Recent Videos</h2>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
      </ul>
      <button class="details">More on youtube</button>

    </div>
  )
}
function RecentTalk() {
  return (
    <div id="recent-talks">
      <h2>Recent Talks</h2>
      <ul>
        <li>Functional Programming: What, Why and How</li>
        <li>JavaScript Code Quality</li>
        <li>Angular JS for Absolute Beginners</li>
        <li>Getting started with React JS</li>
        <li>High Perf JS</li>
        <li>Are you sure, you know JavaScripts</li>
        <li>High Performance JS and CSS</li>
        <li>What's New in ES6</li>
        <li>Make Web Faster</li>
      </ul>
      <button class="details">Speaker profile</button>
    </div>
  )
}
function InviteToTalk() {
  return (
    <div id="invite-to-talk">
      <h2>Invite to a talk</h2>
      <p>if you want to invite that js dude in any of your meetup, conference or hangout, send email to
        khan4019@gmail.com</p>
    </div>
  )
}
export default App;
