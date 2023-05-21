import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Triangle
        visible={true}
        height="120"
        width="120"
        ariaLabel="triangle-loading"
        color="#ffff"
      />
    </div>
  );
};
export default Loader;
