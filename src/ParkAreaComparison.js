import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';
import ParksData from './Parks.csv';

function ParkAreaComparison()
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
    .sort((a, b) => new Date(a) - new Date(b))
    // Create a new array: 
    .map((sortedClass) => {
      // Count the total area of each park category
      const counts = groupByClass[sortedClass]; 
      const totalArea = counts.reduce((acc, count) => {
        return acc + parseInt(count.Area);
      }, 0);
      return {
        x: [sortedClass], // Wrap park class
        y: [totalArea], // Wrap total park
        };
      });
      console.log("Trace result:",traces);

      const x = traces.map(trace => trace.x[0]);
      const y = traces.map(trace => trace.y[0]);
      //Some parks have negative areas, therefore we need to normalize x and y.
      const x_Normalized = [];
      const y_Normalized = [];
      for (let i= 0; i< y.length ; )
      {
        console.log('Entered');
        if(y[i] > 0)
        {
           console.log('i=',i);
           console.log('Entered1');
           x_Normalized.push(x[i]);
           y_Normalized.push(y[i]);
        }
        i = i+1;
      }
      console.log('x_normalized:',x_Normalized);
      console.log('y_normalized:',y_Normalized);

    //--------STEP 2: DISPLAY THE BAR CHART.--------
    return(
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <Plot
        data={[{
          values: y_Normalized,
          labels: x_Normalized,
          textinfo: "name+percent",
          automargin: true,
          type: 'pie',
   
          insidetextorientation: "radial",
        }]}

        layout={{
          title: 'Comparison of Different Types of Park Areas',
          height: 700,
          width: 700,
          
        }}
      />      
    </div>
  );
    
}
export default ParkAreaComparison;
