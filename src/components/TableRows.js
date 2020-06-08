import React from 'react';
import Shows from './Shows';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';

class TableRows extends React.Component {

  constructor() {
    super();
    this.state = {
      considering: true,
      applied: false,
      transfered: false
    }
  }

  cloneJSON = (inJSON) => {
    let outJSON = {};
    Object.entries(inJSON).map((i,index) => {
      return outJSON[i[0]] = i[1];
    });
    return outJSON;
  }

  prepareData = (inJSON) => {
    let clonedJSON = this.cloneJSON(inJSON);
    delete clonedJSON['id'];
    delete clonedJSON['created_at'];
    delete clonedJSON['updated_at'];
    delete clonedJSON['cover_letter_outline'];
    delete clonedJSON['cover_letter_template'];
    return clonedJSON;
  }

  transferRecord = (postJSON,e) => {
    axios.post(ajaxPath('jobs'), postJSON)
    .then(() => {
      this.props.addData();
    })
    .catch((err) => console.log(err.response.data));
    e.preventDefault();
  }

  updateRecord = (e, putJSON) => {
    const recordID = this.props.data['id'];
    axios.put(ajaxPath(`listings/${recordID}`), putJSON)
    .catch((err) => console.log(err.response.data));
    e.preventDefault();
  }

  appliedEvent = (e) => {
    const recordID = this.props.data['id'];
    const newRecordState = !this.state.applied;
    const putJSON = {application_status: newRecordState};

    axios.put(ajaxPath(`listings/${recordID}`), putJSON)
    .then(() => {
      this.setState({applied: newRecordState});
    })
    .catch((err) => console.log(err.response.data));
    e.preventDefault();
  }

  openEvent = (e) => {
    const recordID = this.props.data['id'];
    const newRecordState = !this.state.considering;
    const putJSON = {consideration_status: newRecordState}

    axios.put(ajaxPath(`listings/${recordID}`), putJSON)
    .then(() => {
      this.setState({considering: newRecordState});
    })
    .catch((err) => console.log(err.response.data));
    e.preventDefault();
  }

  transferEvent = (e) => {
    let postJSON = this.props.data;
    postJSON = this.prepareData(postJSON);
    postJSON['transfer_status'] = true;
    postJSON['application_status'] = true;
    postJSON['consideration_status'] = true;
    console.log(postJSON);
    axios.post(ajaxPath('jobs'), postJSON)
    .then((res) => {
      this.setState({transfered: true});
      axios.put(ajaxPath(`listings/${this.props.data['id']}`),{transfer_status: true})
      .catch((err) => console.log(err.response.data));
    })
    .catch((err) => console.log(err.response.data));
    e.preventDefault();
    
  }

  componentDidMount() {
    this.setState({
      considering: this.props.data['consideration_status'],
      applied: this.props.data['application_status'],
      transfered: this.props.data['transfer_status']
    });
  }

  render() {
    const { headers, data, currentTable } = this.props;
    const { considering, applied, transfered } = this.state;

    return (
      <tr>
        {headers.map((header,index) => <td key={index}>{
          header[0] === 'Open' ? <input type="checkbox" id={`open-checkbox-${index}`} className="form-checkbox" onChange={(e) => this.openEvent(e)} checked={considering} />
          : header[0] === 'Applied' ? <input type="checkbox" id={`applied-checkbox-${index}`} className="form-checkbox" onChange={(e) => this.appliedEvent(e)} checked={applied} />
          : header[0] === 'Transfer' && applied === true && transfered === false && currentTable === 'listings' ? <i className="fas fa-check-circle" onClick={(e) => this.transferEvent(e)}></i>
          : header[0] === 'Transfer' && (transfered === true || currentTable === 'jobs') ? <i className="far fa-check-circle"></i>
          : data[header[1]]
          }</td>)}
        <td><Shows data={data}/></td>
      </tr>
    );
  }
}

export default TableRows;