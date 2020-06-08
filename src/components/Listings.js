import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Tables from './Tables';
import Forms from './Forms';

class Listings extends React.Component {

  constructor() {
    super();
    this.state = {
      listingData: [],
      headers: [
        ['#','id'],
        ['Transfer', 'transferred'],
        ['Applied','application_status'],
        ['Open','consideration_status'],
        ['Title','title'],
        ['Job Type','job_type'],
        ['Company','company'],
        ['Address','address'],
        ['Phone Number','phone_number'],
        ['Email Address','email'],
        ['Website URL','website_url']
      ]
    };
  }

  getListings = () => {
    axios.get(ajaxPath('listings'))
    .then((res) => this.setState({listingData: res.data}))
    .catch((err) => console.log(err));
  }

  addData = () => {
    this.getListings();
  }

  componentDidMount() {
    this.getListings();
  }

  render() {
    const inputArr = [['Title','title','input'],['Company','company','input'],['Job Type','job_type','input'],['Address','address','input'],['Phone Number','phone_number','input'],['Email Address','email','input'],['Website URL','website_url','input'],['Job Description','job_description','textarea']];
    const inputPattern = [['6','6'],['6','6'],['6','6'],['6','6']];
    const { listingData, headers } = this.state

    return (
      <div>
        <Forms endpoint={'listings'} inputArr={inputArr} inputPattern={inputPattern} addData={this.addData} />
        <div>
          <Tables headers={headers} dataJSON={listingData} addData={this.addData} currentTable="listings" />
        </div>
      </div>
    );
  }
}

export default Listings;