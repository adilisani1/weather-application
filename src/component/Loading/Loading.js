import React from 'react';
import './Loading.scss';
import loading from "../../image/loading-cloud.png"

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="mb-5 d-flex justify-content-center align-items-center">
        <img src={loading} className="img-fluid w-25 d-flex justify-content-center align-items-center" />
      </div>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;