import React, { useState } from "react";
import "./AddEvent.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom"; // Fixed import for React Router
import { Calendar4Event, PeopleFill } from "react-bootstrap-icons";

const AddEvent = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !description || !date || !file) {
      alert("Please fill out all fields and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("banner", file);
    formData.append("name", user.displayName);
    formData.append("email", user.email);

    try {
      const response = await fetch("http://localhost:5000/addEvents", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Success:", result);
      alert("Event added successfully!");

      // Reset the form after successful submission
      setTitle("");
      setDescription("");
      setDate("");
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading event.");
    }
  };

  return (
    <>
      <Nav />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <Link
              to="/volunteer"
              className="d-flex align-items-center text-black"
            >
              <PeopleFill />
              <span className="ms-2">Volunteer List</span>
            </Link>
            <Link
              to="/add_event"
              className="d-flex align-items-center mt-3 text-black"
            >
              <Calendar4Event className="me-2" />
              Add Events
            </Link>
          </div>
          <div className="col-md-9">
            <h6>Add Events</h6>

            <div className="event-box mt-4 py-2">
              <div className="event-box-inside p-4">
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-6">
                    <h6>Event Title</h6>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      className="input mt-1"
                      type="text"
                      placeholder="Enter title"
                      required
                    />
                    <h6 className="mt-3">Description</h6>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      className="input"
                      name="description"
                      placeholder="Description of your event"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <h6>Event Date</h6>
                    <input
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                      className="input mt-1"
                      type="date"
                      required
                    />
                    <h6 className="mt-3">Banner</h6>
                    <input
                      onChange={(e) => setFile(e.target.files[0])}
                      className="input"
                      type="file"
                      name="banner"
                      accept="image/*"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    {" "}
                    <input
                      type="submit"
                      value="Submit"
                      className="primary-btn mt-3 py-2 px-4 w-25 border"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
