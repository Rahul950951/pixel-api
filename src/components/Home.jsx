import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ images, setSaved, saved }) => {
  const saveImage = (img) => {
    let flag = true;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          // React-Toastify..
          // console.log("Image is already Saved");
          toast.info("Image is already Saved", {
            position: "top-right",
            autoClose: 1498,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      // console.log(saved);
      toast.success("Image sved Successfully", {
        position: "top-right",
        autoClose: 1498,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <ToastContainer />

      <div className="container-fuild text-center" id="top">
        {/* {loader ? (
          <Loader />
        ) : ( */}
        <>
          <div className="flex">
            {images.map((image) => (
              <div
                key={image.id}
                className="items"
                onClick={() => saveImage(image)}
              >
                <img src={image.src.medium} alt={image.photographer} />
              </div>
            ))}
          </div>
        </>
        {/* )} */}

        {images.length != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
