import React, { useEffect, useState } from "react";
import csvdata from "../invoice.csv";
const CsvCalculator = () => {
    const[csv,setCsv] = useState(csvdata[0]);
    const[csvArray, setCsvArray] = useState([]);

  // useEffect(()=>{
  //   const file = csv;
  //       const reader = new FileReader();

  //       reader.onload = function(e) {
  //           const text = e.target.result;
  //           console.log(text);
  //           processCSV(text)
  //       }

  //       reader.readAsText(file);
  // },[])
  // const processCSV = (str=csv, delim=',') => {
  //     const headers = str.slice(0,str.indexOf('\n')).split(delim);
  //     const rows = str.slice(str.indexOf('\n')+1).split('\n');

  //     const newArray = rows.map( row => {
  //         const values = row.split(delim);
  //         const eachObject = headers.reduce((obj, header, i) => {
  //             obj[header] = values[i];
  //             return obj;
  //         }, {})
  //         return eachObject;
  //     })

  //     setCsvArray(newArray)
  // }

  return (
    <div>
      <table>
        <thead>
          <th>s.no</th>
          <th>amount</th>
          <th>item_type</th>
          <th>tax</th>
        </thead>
        <tbody>
          {/* {data.map((el, i) => (
            <tr key={i}>
              <td>{}</td>
              <td>{}</td>
              <td>{el.item_type}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <h1>{}</h1>
    </div>
  );
};

export default CsvCalculator;
