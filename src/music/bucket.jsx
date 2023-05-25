import React from 'react';

import './bucket.css'

function Bucket() {
  return (
    <div>
      <div className="bucket-names">
        <div className="bucket1">
          <a href="#/entSongs"><b>Entertainment Songs</b></a>
        </div>
        <div className="bucket2">
        <a href="#/entVideos"><b>Entertainment videos</b></a>
        </div>
        <div className="bucket3">
        <a href="#/dvtSongs"><b>Devotiobal Songs</b></a>
        </div>
        <div className="bucket4">
        <a href="#/eduVideos"><b>Educational Videos</b></a>
        </div>
      </div>
    </div>
  )
}

export default Bucket
