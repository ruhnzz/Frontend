import React from "react";
import { useParams } from "react-router-dom";
import "./HomeInnerPara.css";

function HomeInnerPara() {
  const { innerPara, imageUrl } = useParams();

  return (
    <div  className="InnerPara">
      {imageUrl && <img className="InnerParaImg" src={decodeURIComponent(imageUrl)} alt="Image" />}
      <p>{decodeURIComponent(innerPara)}</p>
    </div>
  );
}

export default HomeInnerPara;
