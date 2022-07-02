import React from "react";
import { useParams } from "react-router-dom";

const Fund = () => {
  const { fundId } = useParams();

  return <div>Fund Id: {fundId}</div>;
};

export default Fund;
