import React from 'react';

import Bucket from "./bucket";
import EntSongs from './buckets/entSongs';

function BucketsSwitch() {

  let component
  let location=window.location.pathname;
  switch (location) {
    case '/entSongs':
        component=<EntSongs/>
        break;
    case '/entVideos':
        component=<EntSongs/>
        break;
    case '/dvtSongs':
        component=<EntSongs/>
        break;
    case '/eduVideos':
        component=<EntSongs/>
        break;
    default :
        component=<Bucket/>
        break;
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default BucketsSwitch
