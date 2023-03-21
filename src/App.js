import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import DailyCyclistsCounts from './dailyCyclistsCounts';
import DailyPedestriansCounts from './dailyPedestriansCounts';
import DailyCountsComparison from './dailyCountsComparison';
import ParkCounts from './ParkCounts';
import ParkAreaComparison from './ParkAreaComparison';
import './App.css';

function App() {
  return (
    <div className = 'App'>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/dailyCyclistsCounts" activeClassName="active-link">Daily Cyclist Counts Trend</NavLink>
          </li>
          <li>
            <NavLink exact to="/dailyPedestriansCounts" activeClassName="active-link">Daily Pedestrian Counts Trend</NavLink>
          </li>
          <li>
            <NavLink exact to="/dailyCountsComparison" activeClassName="active-link">Daily Pedestrian and Cyclist Counts Comparison</NavLink>
          </li>
          <li>
            <NavLink exact to="/ParkCounts" activeClassName="active-link">Edmonton Park Counts by Class</NavLink>
          </li>
          <li>
            <NavLink exact to="/ParkAreaComparison" activeClassName="active-link">Edmonton Park Area Comparison</NavLink>
          </li>
        </ul>
      </nav>
      
      <Switch>
        <Route path="/an-interactive-look">
          <div>
            <h2>Project Title</h2>
            <p>An Interactive Look at Park, Pedestrian, and Cyclist Data</p>
            <h2>Authors</h2>
            <p>Yanshan Wan, Yunfei Xia</p>
          </div>
        </Route>
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
