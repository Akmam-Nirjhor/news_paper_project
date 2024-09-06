import React from "react";
import { useLoaderData } from "react-router-dom";

const LeftsideDetails2nd = () => {
  const data = useLoaderData(); // Fetch the data using useLoaderData hook

  return (
    <div>
      <p>{data.data}</p> {/* Displaying 'data' property */}
      <p>{data.total_view}</p> {/* Displaying 'total_view' property */}
    </div>
  );
};

export default LeftsideDetails2nd;
