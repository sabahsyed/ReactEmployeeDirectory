import React from "react";
function Search(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            handleInputChange={props.handleInputChange}
            //value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Name"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
  }

export default Search
