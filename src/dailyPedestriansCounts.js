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
    return {
      x: counts.map((count) => count.Log_Timstamp),
      y: counts.map((count) => count.Total_Pedestrian_Count),
      type: 'scatter',
      mode: 'lines',
      marker: { color: 'blue' },
      name: timestamp,
    };
  });

  return (
    <div>
      <Plot
        data={traces}
        layout={{
          title: 'Daily Pedestrian Counts by Timestamp',
          xaxis: { title: 'Timestamp' },
          yaxis: { title: 'Total Pedestrian Count' },
          width: '100%',
          height: '100%',
          autosize: true
        }}
      />      
    </div>
  );
}

export default DailyPedestriansCounts;
