import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Tables from './Tables';
import Forms from './Forms';

class Listings extends React.Component {

  constructor() {
    super();
    this.state = {
      listingData: []
    };
  }

  getListings = () => {
    axios.get(ajaxPath('listings'))
    .then((res) => this.setState({listingData: res.data}))
    .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getListings();
  }
  
  render() {
    const inputArr = [['Title','title','input'],['Job Type','job_type','input'],['Company','company','input'],['Address','address','input'],['Phone Number','phone_number','input'],['Email Address','email','input'],['Website URL','website_url','input'],['Job Description','job_description','textarea']];
    const inputPattern = [['6','6'],['6','6'],['6','6'],['6','6']];
    const headers = ['#', 'Applied', 'Open', 'Title', 'Job Type', 'Company', 'Address', 'Phone Number', 'Email Address', 'Website URL', 'Job Description'];

    return (
      <div>
        <Forms endpoint={'listings'} inputArr={inputArr} inputPattern={inputPattern} />
        <div>
          <Tables headers={headers} dataJSON={this.state.listingData} inputArr={inputArr} />
        </div>
      </div>
    );
  }
}

export default Listings;