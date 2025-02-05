import React, { useEffect, useState } from "react";
import "./Support.css";
import { images } from "../../Data/Data";

const Support = () => {
  const [supportImage, setSupportImage] = useState(null);

  useEffect(() => {
    setSupportImage(images);
  }, []);
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
