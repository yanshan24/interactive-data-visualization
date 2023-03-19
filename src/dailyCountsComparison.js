import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import groupBy from 'lodash/groupBy';

import PedestriansAndBikeCountsData from './Daily_Pedestrian_and_Bike_Counts.csv';

function DailyCountsComparison() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchParseData = async () => {
      Papa.parse(PedestriansAndBikeCountsData, {
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

  const groupByTimestamp = groupBy(data, 'Log_Timstamp');
  const dates = Object.keys(groupByTimestamp).sort((a, b) => new Date(a) - new Date(b));

  const totalPedestrianCounts = dates.map((date) => {
    const counts = groupByTimestamp[date];
    return counts.reduce((total, count) => total + parseInt(count.Total_Pedestrian_Count), 0);
  });

  const totalCyclistCounts = dates.map((date) => {
    const counts = groupByTimestamp[date];
    return counts.reduce((total, count) => total + parseInt(count.Total_Cyclist_Count), 0);
  });

  const traces = [
    {
      x: dates,
      y: totalPedestrianCounts,
      type: 'bar',
      name: 'Total Pedestrian Counts',
    },
    {
      x: dates,
      y: totalCyclistCounts,
      type: 'bar',
      name: 'Total Cyclist Counts',
    },
  ];

  return (
    <div>
      <Plot
        data={traces}
        layout={{
          title: 'Daily Pedestrian and Cyclist Counts Comparison',
          xaxis: { title: 'Timestamp' },
          yaxis: { title: 'Total Counts' },
          width: 1200,
          height: 500,
          autosize: true,
        }}
      />
    </div>
  );
}

export default DailyCountsComparison;
