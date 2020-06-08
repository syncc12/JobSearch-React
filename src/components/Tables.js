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

  headerConvert = (inHeader) => {
    const convertJSON = {
      '#':<i className="fas fa-hashtag"></i>,
      'Transfer':<i className="fas fa-exchange-alt"></i>,
      'Applied':<span className="fa-stack fa-xs"><i className="fas fa-stack-2x fa-file"></i><i className="fas fa-stack-1x fa-share share-icon"></i></span>,
      'Open':<span className="fa-stack fa-xs"><i className="fas fa-stack-2x fa-spinner"></i><i className="fas fa-stack-1x fa-question question-icon"></i></span>,
      'Website URL':<i className="fas fa-globe"></i>,
      'Email Address':<i className="fas fa-envelope"></i>,
      'Phone Number':<i className="fas fa-phone"></i>
    };

    if (convertJSON.hasOwnProperty(inHeader)) {
      return convertJSON[inHeader];
    } else {
      return inHeader;
    }

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
    const { headers, dataJSON, currentTable } = this.props

    return (
      <div className="shadow-box">
        <Table hover responsive>
          <thead>
            <tr>
              {headers.map((header,index) => <th key={index}>{this.headerConvert(header[0])}</th>)}
            </tr>
          </thead>
          <tbody>
            {dataJSON.map((data,index) => <TableRows key={index} headers={headers} data={data} rowNum={index} currentTable={currentTable}/>)}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tables;