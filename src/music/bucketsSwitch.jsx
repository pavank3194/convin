import React from 'react';

import Bucket from "./bucket";
import EntSongs from './buckets/entSongs';

import { HashRouter as Router, Routes , Route } from 'react-router-dom';

function BucketsSwitch() {

  // let component
  // switch (window.location.pathname) {
  //   case '/entSongs':
  //       component=<EntSongs/>
  //       break;
  //   case '/entVideos':
  //       component=<EntSongs/>
  //       break;
  //   case '/dvtSongs':
  //       component=<EntSongs/>
  //       break;
  //   case '/eduVideos':
  //       component=<EntSongs/>
  //       break;
  //   default :
  //       component=<Bucket/>
  // }
  return (
    <div>
    <Router>
      <Routes>
      <Route exact path='/' element={<Bucket/>} />
      <Route path='/entSongs' element={<EntSongs/>} />
      <Route path='/entVideos' element={<EntSongs/>} />
      <Route path='/dvtSongs' element={<EntSongs/>} />
      <Route path='/eduVideos' element={<EntSongs/>} />
      </Routes>
  </Router>
  </div>
  )
}

export default BucketsSwitch
