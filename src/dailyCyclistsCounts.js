import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';
import PedestriansAndBikeCountsData from './Daily_Pedestrian_and_Bike_Counts.csv';

function DailyCyclistsCounts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchParseData = async () => {
        Papa.parse(PedestriansAndBikeCountsData,{
            download: true,
            header: true,
            delimiter:",",
            complete: ((result) => {
                console.log(result.data);
                setData(result.data);
                console.log(result.meta.fields);
            })
        })
    }
  fetchParseData()
  }, [])
  
  const groupByTimestamp = groupBy(data, 'Log_Timstamp'); // group by timestamp

  const traces = Object.keys(groupByTimestamp)
  .sort((a, b) => new Date(a) - new Date(b)) // sort timestamps in ascending order
  .map((timestamp) => {
    const counts = groupByTimestamp[timestamp];
    const totalCyclistCount = counts.reduce((acc, count) => {
      return acc + parseInt(count.Total_Cyclist_Count);
    }, 0);
    return {
      x: [timestamp], // Wrap timestamp in an array
      y: [totalCyclistCount], // Wrap totalCyclistCount in an array
    };
  });

  const x = traces.map(trace => trace.x[0]);
  const y = traces.map(trace => trace.y[0]);

  return (
    <div>
      <Plot
        data={[{
          x: x,
          y: y,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'orange' }
        }]}
        layout={{
          title: 'Daily Cyclist Counts',
          xaxis: { title: 'Timestamp' },
          yaxis: { title: 'Total Cyclist Counts Trend' },
          width: '100%',
          height: '100%',
          autosize: true
        }}
      />      
    </div>
  );
}

export default DailyCyclistsCounts;
