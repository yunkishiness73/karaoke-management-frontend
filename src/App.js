import React, { Component } from 'react';
import TopNav from './components/TopNav';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Alert from './components/Alert/AlertInfo';
import { connect } from 'react-redux';

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
          key={key}
          exact={route.exact}
          path={route.path}
          component={route.main}
        />);
      })
    }
  }

  isAuthenticated = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    
    if (!token) {
      document.body.classList.add('login');
      return <Redirect to="/login" />;
    } else {
      document.body.classList.remove('login');
      console.log('co token tai app');
      return (
        <div className="container body">
        <div className="main_container">
        { this.props.showAlert ? <Alert /> : null }
          <SideBar />
          <TopNav />
          <Switch>
            { this.showContent(routes) }
          </Switch>
          <Footer />
        </div>
      </div>
      )
    }
  }

  render() {
    return (
      <Router>
        { this.isAuthenticated() }
        <Route path="/login" exact="true" component={Login} />
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showAlert: state.alert.showAlert,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);