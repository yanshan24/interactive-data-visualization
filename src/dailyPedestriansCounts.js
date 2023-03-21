import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';
import PedestriansAndBikeCountsData from './Daily_Pedestrian_and_Bike_Counts.csv';

function DailyPedestriansCounts() {
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
    const totalPedestrianCount = counts.reduce((acc, count) => {
      return acc + parseInt(count.Total_Pedestrian_Count);
    }, 0);
    return {
      x: [timestamp], // Wrap timestamp in an array
      y: [totalPedestrianCount], // Wrap totalPedestrianCount in an array
    };
  });

  const x = traces.map(trace => trace.x[0]);
  const y = traces.map(trace => trace.y[0]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Plot
        data={[{
          x: x,
          y: y,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'blue' }
        }]}
        layout={{
          title: 'Daily Pedestrian Counts',
          xaxis: { title: 'Timestamp' },
          yaxis: { title: 'Total Pedestrian Counts Trend' },
          width: 1000,
          height: 500,
          autosize: true
        }}
      />      
    </div>
  );
}

export default DailyPedestriansCounts;
