import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ResultList from '../components/ResultList';
import SearchEmployees from '../components/SearchEmployees';
import API from '../utils/API';

class MainPage extends Component {
  state = {
    employees: [],
    input: '',
    sorted: 'ascending',
    searchResults: []
  };
  componentDidMount() {
    API.employees().then((res) => {
      this.setState({
        employees: res.data.results,
        searchResults: res.data.results
      });
    });
  }
  handleSort = () => {
    if (this.state.sorted === 'ascending') {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        return a.name.last.localeCompare(b.name.last);
      });

      this.setState({ employees: sortedEmployees, sorted: 'descending' });
    } else {
      const sortedEmployees = this.state.employees.sort((a, b) => {
        return b.name.last.localeCompare(a.name.last);
      });

      this.setState({ employees: sortedEmployees, sorted: 'ascending' });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    const searchResults = this.state.searchResults.filter((employee) => {
      return employee.name.last.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ employees: searchResults });
  };

  render() {
    return (
      <>
        <NavBar />
        <SearchEmployees
          input={this.state.input}
          handleInputChange={this.handleInputChange}
        />

        <ResultList
          employees={this.state.employees}
          handleSort={this.handleSort}
        />
      </>
    );
  }
}

export default MainPage;
