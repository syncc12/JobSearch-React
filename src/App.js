import React from 'react';
import './App.scss';
import Layout from './components/Layout';
import Listings from './components/Listings';
import Home from './components/Home';
import Jobs from './components/Jobs';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showHome: true,
      showListings: false,
      showJobs: false
    };
  }

  onNavLinkClicked = (linkName) => {
    if (linkName === 'home') {
      this.setState({showListings: false});
      this.setState({showJobs: false});
      this.setState({showHome: !this.state.showHome});
    } else if (linkName === 'listings') {
      this.setState({showHome: false});
      this.setState({showListings: !this.state.showListings});
    } else if (linkName === 'jobs') {
      this.setState({showHome: false});
      this.setState({showJobs: !this.state.showJobs});
    }
  }

  render() {
    return (
      <div className="App">
        <Layout onNavLinkClicked={this.onNavLinkClicked} />
        <br/>
        {this.state.showHome ? <Home /> : ''}
        {this.state.showListings ? <Listings /> : ''}
        {this.state.showJobs ? <Jobs /> : ''}
      </div>
    );
  }
}

export default App;
