import React from "react";

function SearchBar() {
  return (
    <div className="search-bar bg-light p-4 rounded">
      <div className="row">
        <div className="col-md-3 mb-2">
          <label>Where do you plan to go?</label>
          <input
            type="text"
            placeholder="Enter Place"
            className="form-control"
          />
        </div>
        <div className="col-md-2 mb-2">
          <label>Travel dates</label>
          <input
            type="date"
            placeholder="Select Dates"
            className="form-control"
          />
        </div>
        <div className="col-md-3 mb-2">
          <label>What is the occassion?</label>
          <select className="form-control">
            <option>select...</option>
            <option>Honeymoon</option>
            <option>Celebration</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <label>How many people?</label>
          <input type="number" className="form-control" placeholder="0" />
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-danger mt-4 w-100">Search Offers</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
