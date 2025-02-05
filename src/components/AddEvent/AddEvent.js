import React from "react";
import "./AddEvent.css";

const AddEvent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <p>Volunteer list</p>
          <p>Add Events</p>
        </div>
        <div className="col-md-9">
          <h6>Add Events</h6>

          <div className="event-box">
            <div className="event-box-inside">
              <div className="row">
                <div className="col-md-6">
                  <h6>Event Title</h6>
                  <input type="text" placeholder="Enter titile" />
                  <h6>Description</h6>
                  <textarea
                    className=""
                    name="description"
                    id="description"
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <h6>Event Date</h6>
                  <input type="date" />
                  <h6>Banner</h6>
                  <input type="file" />
                </div>
              </div>
            </div>
            <button className="primary-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
