import React, { useEffect, useState } from "react";
import { Calendar4Event, PeopleFill } from "react-bootstrap-icons";
import { Link } from "react-router";
import Nav from "../Nav/Nav";
import "./Volunteer.css";
const Volunteer = () => {
  const [volunteer, setVolunteers] = useState("");

  console.log(volunteer);
  useEffect(() => {
    fetch("http://localhost:5000/volunteers")
      .then((res) => res.json())
      .then((result) => setVolunteers(result));
  }, []);
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
              to="/add_event"
              className="d-flex align-items-center mt-3 text-black
            "
            >
              <Calendar4Event className="me-2" />
              Add Events
            </Link>
          </div>
          <div className="col-md-9">
            <h6>Event Members</h6>

            <div className="members my-5 p-4">
              {volunteer &&
                volunteer.map((vol) => {
                  return (
                    <div key={vol._id} className="row">
                      <div className="col-md-3">
                        <h4>{vol.name}</h4>
                      </div>

                      <div className="col-md-3">
                        <p>{vol.title}</p>
                      </div>
                      <div className="col-md-3">
                        <p>{vol.date}</p>
                      </div>
                      <div className="col-md-3">
                        <p>{vol.email}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
