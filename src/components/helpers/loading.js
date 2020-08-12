import React from "react";
import LoaderGif from "../../assets/image/loader.gif";
import "../css/components/loader.css";
const FullPageLoader = ({ loading }) => {
  if (loading === true) {
    return (
      <div className="loader-container">
        <div className="loader">
          <img src={LoaderGif} alt="loading" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default FullPageLoader;
