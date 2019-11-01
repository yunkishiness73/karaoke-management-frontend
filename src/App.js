import React, { Component } from 'react';
import TopNav from './components/TopNav';
import Filter from './components/Filter';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Room from './components/Room/Room';
import Item from './components/Item/Item';
import Invoice from './components/Invoice/Invoice';

// import LineChart from './LineChart';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints: [{ x: '2019-09', y: 10000 }]
    };
  }

  componentWillMount() {
    document.body.classList.add('nav-md');
  }

  render() {
    return (
        //<Login />
      <div className="container body">
        <div className="main_container">
          <SideBar />
          <TopNav />
          {/* <Invoice /> */}
          {/* <Room /> */}
          <Item />
          <Footer />
        </div>
      </div>
    );
  }


}

export default App;