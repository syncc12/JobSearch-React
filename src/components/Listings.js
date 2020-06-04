import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Tables from './Tables'
import Forms from './Forms'


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
    const inputArr = [['Title','title'],['Job Type','job_type'],['Company','company'],['Address','address'],['Phone Number','phone_number'],['Email Address','email'],['Website URL','website_url'],['Job Description','job_description'],['Applied','application_status'],['Open','consideration_status']];
    const headers = ['#', 'Title', 'Job Type', 'Company', 'Address', 'Phone Number', 'Email Address', 'Website URL', 'Job Description', 'Applied', 'Open'];

    return (
      <div>
        <Forms endpoint={'listings'} inputArr={inputArr}/>
        <div>
          <Tables headers={headers} dataJSON={this.state.listingData} />
        </div>
          
      </div>
    );
  }
}

export default Listings;


