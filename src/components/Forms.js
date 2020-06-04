import React from 'react';
import axios from 'axios';
import ajaxPath from '../helpers/ajax';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class Forms extends React.Component {

  postRecord = (postEndpoint, postJSON) => {
    console.log(JSON.parse(postJSON));
    axios.post(ajaxPath(postEndpoint), JSON.parse(postJSON))
    .then((res) => '')
    .catch((err) => console.log(err.response.data));
  }

  arrExclude = (inArr, exclude=[]) => {
    let outArr = [];
    for (var i of inArr) {
      if (!exclude.includes(i)) outArr.push(i);
    }
    return outArr;
  }

  render() {

    const { endpoint, inputArr } = this.props;
    const postJSON = '{"title": "Test", "job_type": "Test", "company": "Test", "address": "Test", "phone_number": "Test", "email": "Test", "website_url": "Test", "job_description": "Test", "application_status": false, "consideration_status": true}';

    return (
      <Row>
        <Col lg={5}>
          <div className="shadow-box">
            <Form>
              {inputArr.map((input,index) => <Form.Control key={index} placeholder={input[0]} type="text" data-columnname={input[1]} />)}
              <br/>
              <Button variant="primary" type="submit" onClick={() => this.postRecord(endpoint, postJSON)}>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Forms;

