import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./topfold.css";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i class="fas fa-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <i class="fas fa-plus-circle"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fas fa-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fas fa-times-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;