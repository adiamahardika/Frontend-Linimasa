import React from "react";
import LoaderGif from "../../assets/image/loader.gif";
import '../css/components/loader.css'
const FullPageLoader = ({ loading }) => {
  if (loading === false) return null;
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={LoaderGif} alt="loading"/>
      </div>
    </div>
  );
};
export default FullPageLoader;
