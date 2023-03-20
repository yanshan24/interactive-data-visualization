import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';
import ParksData from './Parks.csv';

//This function counts the number of parks in each category and display it into bar chart
function ParkCounts()
{
    const [data, setData] = useState([]);

      var trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
      };

    <plot data = {trace1} />
      
   
}
export default ParkCounts;