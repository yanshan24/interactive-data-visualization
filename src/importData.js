import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';
import PedestriansAndBikeCountsData from './Daily_Pedestrian_and_Bike_Counts.csv';

function ImportData() {
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
                console.log(result.meta.fields); // add this line
            })
        })
    }
    fetchParseData()
    }, [])

  console.log(data);
    
  return (
    <div>
      <Plot
        data={[
          {
            x: data.map((d) => d.Log_Timstamp),
            y: data.map((d) => d.Total_Cyclist_Count),
            type: 'scatter',
            mode: 'lines',
            marker: { color: 'red' },
          },
        ]}
        layout={{ width: 800, height: 500 }}
        xaxis={{ title: "Date" }}
        yaxis={{ title: "Count" }}
      />
      {console.log('x:', data.map((d) => d.Log_Timstamp))}
    </div>
  );
}

export default ImportData;
