import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import ReactPlayer from "react-player";

import './music.css';

import BucketsSwitch from "./bucketsSwitch";

function MediaPlayer () {
  

  return (
    <div className="music-player">
      <div className="header">
        <b>CONVIN Music Player</b>
      </div>
      <div className="username">
        <button disabled="disabled"><b>Pavan Kalyan</b> </button>
      </div>
      <div className="add-bucket">
        <BucketsSwitch/>
      </div>
    </div>
  );
};

export default MediaPlayer;
