import React from 'react';
import Shows from './Shows';

class TableRows extends React.Component {

  buildCrossRefJSON = (inInputArr) => {
    let outJSON = {};
    for (let i of inInputArr) {
      outJSON[i[0]] = i[1];
    }
    return outJSON;
  }

  render() {
    const { headers, data, inputArr} = this.props;
    const crJSON = this.buildCrossRefJSON(inputArr);
    return (
      <tbody>
        {data.map((dataRow,index) => <tr key={index}><td>{index+1}</td>
          {headers.map((header,index) => <td key={index}>{dataRow[crJSON[header]]}</td>)}
        <td><Shows data={dataRow}/></td></tr>)}
      </tbody>
      
    );
  }
}

export default TableRows;