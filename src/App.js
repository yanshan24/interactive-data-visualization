import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DailyCyclistsCounts from './dailyCyclistsCounts';
import DailyPedestriansCounts from './dailyPedestriansCounts';
import DailyCountsComparison from './dailyCountsComparison';
import './App.css';

function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}


export default App;
