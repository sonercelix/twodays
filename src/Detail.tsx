import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  console.log(params);
  const { pid } = params;

  return (
    <div>
      <div>
        <hr />
      </div>
      {pid} Detail
    </div>
  );
}

export default Detail;
