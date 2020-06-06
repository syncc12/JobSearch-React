import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Tables from './Tables';
import Forms from './Forms';

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
    const inputArr = [['Title','title','input'],['Job Type','job_type','input'],['Company','company','input'],['Address','address','input'],['Phone Number','phone_number','input'],['Email Address','email','input'],['Website URL','website_url','input'],['Job Description','job_description','textarea']];
    const inputPattern = [['6','6'],['6','6'],['6','6'],['6','6']];
    const headers = ['#', 'Applied', 'Open', 'Title', 'Job Type', 'Company', 'Address', 'Phone Number', 'Email Address', 'Website URL', 'Job Description'];

    return (
      <div>
        <Forms endpoint={'jobs'} inputArr={inputArr} inputPattern={inputPattern} />
        <div>
          <Tables headers={headers} dataJSON={this.state.jobData} inputArr={inputArr} />
        </div>
      </div>
    );
  }
}

export default Jobs;