import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-uppercase">I Grow By Helping People In Need</h1>
          <div className="input-box my-4">
            <input
              className="input-search py-2 px-5 rounded-2"
              type="text"
              name="name"
              id="name"
              placeholder="Search"
            />
            <button className="primary-btn py-2 px-4 input-btn rounded-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
