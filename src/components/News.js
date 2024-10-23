import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import { Link } from "react-router-dom";

function News() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/home");
        console.log("Data fetched from API:", response.data);
        setData(response.data);
      } catch (error) {
        setError("There was an error fetching the data!");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        {error && <p>{error}</p>}
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className="homeBox">
                <img src={item.ImageURL} alt={item.Heading} />
                <div className="homeBoxContent">
                  <h2>{item.Heading}</h2>
                  <p>{item.SubContent}</p>
                  <Link to={`/HomeInnerPara/${encodeURIComponent(item.InnerPara)}/${encodeURIComponent(item.ImageURL)}`}>Read more</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default News;
