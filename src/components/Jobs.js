import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Tables from './Tables'
import Forms from './Forms'

class Jobs extends React.Component {

  constructor() {
    super();
    this.state = {
      jobData: []
    };
  }

  getJobs = () => {
    axios.get(ajaxPath('jobs'))
    .then((res) => this.setState({jobData: res.data}))
    .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getJobs();
  }

  render() {
    const inputArr = [['Number','id'],['Title','title'],['Job Type','job_type'],['Company','company'],['Address','address'],['Phone Number','phone_number'],['Email Address','email'],['Website URL','website_url'],['Job Description','job_description'],['Applied','application_status'],['Open','consideration_status']];
    const headers = ['#', 'Title', 'Job Type', 'Company', 'Address', 'Phone Number', 'Email Address', 'Website URL', 'Job Description', 'Applied', 'Open'];

    return (
      <div>
        <Forms endpoint={'jobs'} inputArr={inputArr}/>
        <div>
          <Tables headers={headers} dataJSON={this.state.jobData} />
        </div>
          
      </div>
    );
  }
}

export default Jobs;