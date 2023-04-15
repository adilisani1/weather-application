import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-screen">
      {/* <div className="mb-5 d-flex justify-content-center align-items-center">
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
          <iframe src="https://giphy.com/embed/KV1s4kSJHaY3m" width="100%" height="100%"
            style="position:absolute"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen>
          </iframe></div><p><a href="https://giphy.com/gifs/ae-everyday-aftereffects-KV1s4kSJHaY3m">via GIPHY</a></p>
      </div> */}

      <div className="loading-spinner"></div>

      <div className='detecting-location'>
        <h2>Detecting your location</h2>
        <p>Your current location will be displayed on the App for Real time weather.</p>
      </div>
    </div>
  );
};

export default Loading;