import React from 'react';

import Bucket from "./bucket";
import EntSongs from './buckets/entSongs';

import { HashRouter as Router, Routes , Route } from 'react-router-dom';

function BucketsSwitch() {

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
