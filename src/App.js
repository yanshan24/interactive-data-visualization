import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DailyCyclistsCounts from './dailyCyclistsCounts';
import DailyPedestriansCounts from './dailyPedestriansCounts';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/dailyCyclistsCounts">Daily Cyclists Counts</Link>
          </li>
          <li>
            <Link to="/dailyPedestriansCounts">Daily Pedestrians Counts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/dailyCyclistsCounts">
          <DailyCyclistsCounts />
        </Route>
        <Route path="/dailyPedestriansCounts">
          <DailyPedestriansCounts />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
