import React from 'react';
import './App.scss';
import Layout from './components/Layout';
import Listings from './components/Listings';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showHome: true,
      showListings: false,
      showJobs: false
    };
  }

  widthLogic = () => {
    const smallWidth = [[5,1],[5,0]];
    const bigWidth = [[10,1],[10,1]];
    const { showListings, showJobs } = this.state;
    if (showListings === true && showJobs === true) {
      return smallWidth;
    } else {
      return bigWidth;
    }
  }

  onNavLinkClicked = (linkName) => {
    if (linkName === 'home') {
      this.setState(() => {return {showListings: false}});
      this.setState(() => {return {showJobs: false}});
      this.setState(() => {return {showHome: !this.state.showHome}});
    } else if (linkName === 'listings') {
      this.setState(() => {return {showHome: false}});
      this.setState(() => {return {showListings: !this.state.showListings}});
    } else if (linkName === 'jobs') {
      this.setState(() => {return {showHome: false}});
      this.setState(() => {return {showJobs: !this.state.showJobs}});
    }
  }

  render() {
    return (
      <div className="App">
        <Layout onNavLinkClicked={this.onNavLinkClicked} />
        <br/>
        <Row>
          {this.state.showHome ? <Col lg={{ span: 10, offset: 1 }}><Home /></Col> : ''}
          {this.state.showListings ? <Col lg={{ span: this.widthLogic()[0][0], offset: this.widthLogic()[0][1] }}><Listings /></Col> : ''}
          {this.state.showJobs ? <Col lg={{ span: this.widthLogic()[1][0], offset: this.widthLogic()[1][1] }}><Jobs width={this.widthLogic()} /></Col> : ''}
        </Row>
    </div>
    );
  }
}

export default App;
