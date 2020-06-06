import React from 'react';
import Table from 'react-bootstrap/Table';
import Shows from './Shows';
import TableRows from './TableRows';

class Tables extends React.Component {

  constructor() {
    super();
    this.state = {
      rowData: []
    };
  }

  decompileJSON = (inJSON, exclude=[], includeButton=false) => {
    let outArr = [];
    for (var i of Object.entries(inJSON)) {
      if (!exclude.includes(i[0])) outArr.push([i[0],i[1]]);
    }
    if (includeButton === true) {
      outArr.push(['',<Shows />])
    }
    return outArr;
  }

  orderTDs = (inHeaders, inDataJSON) => {

  }

  render() {
    const { headers, dataJSON, inputArr } = this.props

    return (
      <div className="shadow-box">
        <Table hover responsive>
          <thead>
            <tr>
              {headers.map((header,index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>
          <TableRows headers={headers} data={dataJSON} inputArr={inputArr}/>
          {/*<tbody>
            {dataJSON.map((row,index) => <tr key={`row-${index}`} id={`data-table-tr-${index}`}>
              {this.decompileJSON(row,['created_at','updated_at'],true).map((data,index) => <td key={`td-${index}`}>{data[1]}</td>)}
              </tr>)}
          </tbody>*/}
        </Table>
      </div>
    );
  }
}

export default Tables;