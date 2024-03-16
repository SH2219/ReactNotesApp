import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './index.css'
const Search = ({handleSearchNote}) => {
  return (
    <>
      <div className="container mt-5">
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success" type="submit">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Type to search"
            aria-label="Search"
            onChange={(e)=> handleSearchNote(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
