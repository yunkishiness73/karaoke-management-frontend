import React, { Component } from 'react';
import TopNav from './components/TopNav';
import Filter from './components/Filter';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

  showContent = (routes) => {
    if (routes.length > 0) {
      return routes.map((route, key) => {
        return (<Route 
                exact={route.exact}
                path={route.path}
                component={route.main} 
              />);
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="container body">
          <div className="main_container">
            <SideBar />
            <TopNav />
            <Switch>
              { this.showContent(routes) }
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }


}

export default App;