import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';
import ParksData from './Parks.csv';

function ParkCounts()
{

  //--------STEP 1: FETCH AND EXTRACT DATA--------
  const [data, setData] = useState([]);
  useEffect(() => {
      const fetchParseData = async () => {
        Papa.parse(ParksData, {
          download: true,
          header: true,
          delimiter: ",",
          complete: ((result) => {
            console.log(result.data);
            setData(result.data);
            console.log(result.meta.fields);
          })
        })
      }
      fetchParseData();
    }, []);

    // Group the data by classes，results are listed below:
    // { Natural Area Park: Array(154), Urban Village Park: Array(100), Pocket Park: Array(402), City Park: Array(51), District Activity Park: Array(25), …}
    const groupByClass = groupBy(data, 'Class'); 
    console.log('Park Groupby Result:',groupByClass);
    console.log('Park Groupby Result 1:',groupByClass['Natural Area Park']);

    const traces = Object.keys(groupByClass) 
    // Get the class names: Natural Area Park, Urban Village Park, Pocket Park...
    // Create a new array: 
    .map((sortedClass) => {
      // Count the number of each park category
      const counts = groupByClass[sortedClass];
      return {
        x: [sortedClass], // Wrap park class
        y: [counts.length], // Wrap total park
        };
      });
      console.log("Trace result:",traces);
      // Extract category(x) and counts(y) and print the result:
      // x: Natural Area Park, Urban Village Park...
      // y: 144, 32....
      const x = traces.map(trace => trace.x[0]);
      const y = traces.map(trace => trace.y[0]);
      console.log('x:',x);
      console.log('y:',y);
      //Normalize the data
      const x_normalized = [];
      const y_normalized = [];
      for (let i= 0; i< 7 ; )
      {
        x_normalized.push(x[i]);
        y_normalized.push(y[i]);
        i = i+1;
      }
      x_normalized.push('Others');
      y_normalized.push(y[11]);

  //--------STEP 2: DISPLAY THE BAR CHART.--------
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <Plot
        data={[{
          x: x_normalized,
          y: y_normalized,
          type: 'bar',
          marker: { color: 'blue' }
        }]}
        layout={{
          title: 'Edmonton Park Counts by Class',
          xaxis: { title: 'Class Name' },
          yaxis: { title: 'Park Numbers' },
          width: 1000,
          height: 500,
          autosize: true
        }}
      />      
    </div>
  );
}
export default ParkCounts;
