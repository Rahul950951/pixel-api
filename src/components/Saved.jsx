import React from "react";
import { useLocation } from "react-router-dom";

const Saved = ({ saved }) => {
  return (
    <>
      <div className="container-fuild text-center" id="top">
        <div className="flex">
          {saved.map((image) => (
            <div key={image.id} className="items">
              <img src={image.src.medium} alt={image.photographer} />
            </div>
          ))}
        </div>

        {saved.length != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Saved;
