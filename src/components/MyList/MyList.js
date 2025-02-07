import React, { useEffect, useState } from "react";
import img from "../../logos/logo.png";
import "./MyList.css";
import Nav from "../Nav/Nav";
const MyList = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [mydata, setMydata] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/myData?email=" + user.email)
      .then((res) => res.json())
      .then((result) => setMydata(result));
  }, [mydata]);

  const handleCancel = (id) => {
    fetch("http://localhost:5000/delete-item/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          const remainsData = mydata.filter((items) => items.id !== id);
          setMydata(remainsData);
        }
      });
  };
  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="list-box d-flex flex-column justify-content-center align-items-center">
              {mydata &&
                mydata.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="list-item d-flex flex-row justify-content-center"
                    >
                      <img
                        className="w-25 me-3 rounded-1"
                        src={`http://localhost:5000/uploads/${item.img}`}
                        alt="img"
                      />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                        <button
                          onClick={() => handleCancel(item._id)}
                          className="primary-btn py-2 px-3"
                        >
                          Cancel
                        </button>
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

export default MyList;
