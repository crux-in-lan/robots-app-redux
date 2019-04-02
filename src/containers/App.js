import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scrollable from '../components/Scrollable';
import ErrorBondry from './ErrorBondry';
import {connect} from 'react-redux';
import {setSearchField, setRobots} from '../redux/actions';
import Footer from '../components/footer';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRobotRequest: () => dispatch(setRobots())
  }
}

class App extends Component {

  componentDidMount = () => {
    this.props.onRobotRequest();
  }

  render() {
    const filteredRobots = this.props.robots.filter(robot => {
      return (robot.name.includes(this.props.searchField) ||
        robot.email.includes(this.props.searchField))
    });
    if(this.props.isPending) {
      return(<h1>Loading</h1>);
    } else {
      return (
        <div className="App">
          <SearchBox onSearchChange={this.props.onSearchChange}/>
          <Scrollable>
           <ErrorBondry>
              <CardList filteredRobots={filteredRobots}/>
            </ErrorBondry>
          </Scrollable>
          <Footer/>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
