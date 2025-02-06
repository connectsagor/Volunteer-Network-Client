import React, { useEffect, useState } from "react";
import "./Support.css";
import { images } from "../../Data/Data";

const Support = () => {
  const [supportImage, setSupportImage] = useState(null);
  console.log(supportImage);
  useEffect(() => {
    fetch("http://localhost:5000/addAllSupport")
      .then((res) => res.json())
      .then((result) => setSupportImage(result))
      .catch((err) => console.log(err));
  }, []);

  // const handleAdd = () => {
  //   fetch("http://localhost:5000/postItems", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(images),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error("Error:", error));
  // };
  return (
    <div className="img-box container my-5">
      {supportImage &&
        supportImage.map((el) => (
          <div className="img-item" key={el.id}>
            <img className="" src={`/images/${el.img}`} alt={el.id} />
            <h5 className="title-h5 py-2 text-center text-uppercase">
              {el.name}
            </h5>
          </div>
        ))}
    </div>
  );
};

export default Support;
