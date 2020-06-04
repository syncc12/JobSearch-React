import React from 'react';

class Tables extends React.Component {

  constructor() {
    super();
    this.state = {
      rowData: []
    };
  }

  decompileJSON = (inJSON, exclude=[]) => {
    let outArr = [];
    for (var i of Object.entries(inJSON)) {
      if (!exclude.includes(i[0])) outArr.push([i[0],i[1]]);
    }
    return outArr;
  }

  render() {
    const { headers, dataJSON } = this.props

    return (
      <div className="shadow-box">
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((header,index) => <th key={index} className='data-table-tr'>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataJSON.map((row,index) => <tr key={`row-${index}`} id={`data-table-tr-${index}`} className='data-table-tr'>
              {this.decompileJSON(row,['created_at','updated_at']).map((data,index) => <td key={`td-${index}`}>{data[1]}</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tables;