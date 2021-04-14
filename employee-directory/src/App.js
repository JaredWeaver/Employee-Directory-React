import React, { Component } from 'react';
// import SearchResultContainer from './components/SearchResultContainer';
import NavBar from './components/NavBar';
import ResultList from './components/ResultList';
import API from './utils/API';

class App extends Component {
  state = {
    employees: [],
    sorted: 'ascending'
  };
  componentDidMount() {
    API.employees().then((res) => {
      this.setState({ employees: res.data.results });
    });
  }
  handleSort = () => {
    if (this.state.sorted === 'ascending') {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        return a.name.last.localeCompare(b.name.last);
      });

      this.setState({ employees: sortedEmployees , sorted:'descending'});
    }
    else{
      const sortedEmployees = this.state.employees.sort((a, b) => {
        return b.name.last.localeCompare(a.name.last);
      });

      this.setState({ employees: sortedEmployees , sorted:'ascending'});
    }
  };
  render() {
    return (
      <>
        <NavBar />
        <ResultList
          employees={this.state.employees}
          handleSort={this.handleSort}
        />
      </>
    );
  }
}

export default App;
