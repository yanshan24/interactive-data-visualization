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
      <div>
          <header className="App container mt-5">
            <h1 style ={{color: 'black'}}>An Interactive Look at Park Usage, Pedestrian and Cycling Trends</h1>
          </header>
          <h2 style ={{color: 'black'}}>Yanshan Wan, Yunfei Xia</h2>
  
      </div>
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
