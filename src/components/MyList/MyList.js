import React from "react";
import img from "../../logos/logo.png";
import "./MyList.css";
const MyList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="list-box d-flex flex-column justify-content-center align-items-center">
            <div className="list-item d-flex flex-row justify-content-center">
              <img className="w-25" src={img} alt="img" />
              <div>
                <h3>Title Here</h3>
                <p>Date</p>
                <button>Cancel</button>
              </div>
            </div>
            <div className="list-item d-flex flex-row justify-content-center">
              <img className="w-25" src={img} alt="img" />
              <div>
                <h3>Title Here</h3>
                <p>Date</p>
                <button>Cancel</button>
              </div>
            </div>
            <div className="list-item d-flex flex-row justify-content-center">
              <img className="w-25" src={img} alt="img" />
              <div>
                <h3>Title Here</h3>
                <p>Date</p>
                <button>Cancel</button>
              </div>
            </div>
            <div className="list-item d-flex flex-row justify-content-center">
              <img className="w-25" src={img} alt="img" />
              <div>
                <h3>Title Here</h3>
                <p>Date</p>
                <button>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
