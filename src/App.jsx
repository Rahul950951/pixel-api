import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import Saved from "./components/Saved";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  const API_KEY = "6LcNGHn4CxPRAbzUGrdrJoPc2Q5ngOvwdssC1HS4IbO6Cqq88Fs0fjfp";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log("res from API = ", res.data.photos);
      setImages(res.data.photos);
      setLoader(false);
      console.log(images);
    };

    const data = JSON.parse(localStorage.getItem("Images"));
    if (data) {
      setSaved(data);
    }

    fetchImage();
  }, [search]);

  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("Images", json);
    }
  }, [saved]);

  console.log("Image is saved", saved);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={(loader, setLoader)}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />

          <Route path="/saved" element={<Saved saved={saved} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
