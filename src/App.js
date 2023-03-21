import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DailyCyclistsCounts from './dailyCyclistsCounts';
import DailyPedestriansCounts from './dailyPedestriansCounts';
import DailyCountsComparison from './dailyCountsComparison';
import ParkCounts from './ParkCounts';
import ParkAreaComparison from './ParkAreaComparison';


function App() {
  return (
    <div className = 'App'>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/dailyCyclistsCounts">Daily Cyclist Counts Trend</Link>
          </li>
          <li>
            <Link to="/dailyPedestriansCounts">Daily Pedestrian Counts Trend</Link>
          </li>
          <li>
            <Link to="/dailyCountsComparison">Daily Pedestrian and Cyclist Counts Comparison</Link>
          </li>
          <li>
            <Link to="/ParkCounts">Edmonton Park Counts by Class</Link>
          </li>
          <li>
            <Link to="/ParkAreaComparison">Edmonton Park Area Comparison</Link>
          </li>
        </ul>
      </nav>
      
      <Switch>
        <Route exact path="/">
          <div>
            <h2>Project Title</h2>
            <p>An Interactive Look at Park Usage, Pedestrian and Cycling Trends</p>
            <h2>Authors</h2>
            <p>Yanshan Wan, Yunfei Xia</p>
          </div>
        <Route path="/dailyCyclistsCounts">
          <DailyCyclistsCounts />
        </Route>
        <Route path="/dailyPedestriansCounts">
          <DailyPedestriansCounts />
        </Route>
        <Route path="/dailyCountsComparison">
          <DailyCountsComparison />
        </Route>
        <Route path="/ParkCounts">
          <ParkCounts />
        </Route>
        <Route path="/ParkAreaComparison">
          <ParkAreaComparison />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App;
