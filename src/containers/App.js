import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scrollable from '../components/Scrollable';
import ErrorBondry from './ErrorBondry';
import {connect} from 'react-redux';
import {setSearchField} from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    }
  }

  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value});
  // }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(result => {
      this.setState({robots: result});
    })
    .catch(err => alert('Unable to fetch robots from API')) 
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return (robot.name.includes(this.props.searchField) ||
        robot.email.includes(this.props.searchField))
    });
    return (
      <div className="App">
        <SearchBox onSearchChange={this.props.onSearchChange}/>
        <Scrollable>
         <ErrorBondry>
            <CardList filteredRobots={filteredRobots}/>
          </ErrorBondry>
        </Scrollable>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
