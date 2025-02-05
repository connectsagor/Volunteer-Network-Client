import React from "react";
import "./MyList.css";
const MyList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="list-box d-flex flex-column justify-content-center align-items-center">
            <div className="list-item">
              <img src="" alt="img" />
              <div>Title</div>
              <p>Date</p>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
