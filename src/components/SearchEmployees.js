const SearchEmployees = (props) => {
  return (
    <form className="bg-dark mr-3">
      <div className="form-group bg-dark">
        {/* <label htmlFor="search">Search:</label> */}
        <input
          onChange={props.handleInputChange}
          value={props.input}
          name="input"
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Find Employees by Last Name"
          id="search"
          key={props.key}
        />
        {/* <button
          onClick={props.handleFormSubmit}
          className="btn btn-success float-right"
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default SearchEmployees;
