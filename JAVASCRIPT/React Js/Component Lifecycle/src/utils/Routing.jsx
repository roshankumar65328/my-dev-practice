import React from 'react'
import {Routes, Route} from 'react-router-dom'

import ComponentLifecycleHome from '../components/ComponentLifecycleHome'
import ComponentLifecycle from '../components/ComponentLifecycle'
import ComponentLifecycleAbout from '../components/ComponentLifecycleAbout'
import ShowDataAutomatically from '../components/ShowDataAutomatically'

function Routing() {
  return (

    <Routes>
      <Route path="/" element={<ComponentLifecycleHome />}></Route>
      <Route path="/componentlifecycle" element={<ComponentLifecycle />}></Route>
      <Route path="/componentlifecycleabout" element={<ComponentLifecycleAbout />}></Route>
      <Route path="/showdataautomatically" element={ <ShowDataAutomatically /> }></Route>
    </Routes>

  )
}

export default Routing