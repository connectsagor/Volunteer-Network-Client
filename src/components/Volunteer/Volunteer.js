import React from "react";
import { Calendar4Event, PeopleFill } from "react-bootstrap-icons";
import { Link } from "react-router";
import Nav from "../Nav/Nav";

const Volunteer = () => {
  return (
    <>
      <Nav />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <Link
              to="/volunteer"
              className="d-flex align-items-center text-black
            "
            >
              <PeopleFill />
              <span className="ms-2">Volunteer list</span>
            </Link>
            <Link
              to=""
              className="d-flex align-items-center mt-3 text-black
            "
            >
              <Calendar4Event className="me-2" />
              Add Events
            </Link>
          </div>
          <div className="col-md-9">
            <h6>Event Members</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
