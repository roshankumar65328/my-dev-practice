import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import ComponentLifecycleHome from './components/ComponentLifecycleHome'
import ComponentLifecycle from './components/ComponentLifecycle'
import ComponentLifecycleNav from './components/ComponentLifecycleNav'
import ComponentLifecycleAbout from './components/ComponentLifecycleAbout'
import ShowDataAutomatically from './components/ShowDataAutomatically'

import Routing from './utils/Routing'

function App() {
  return (
    <>

    <ComponentLifecycleNav />

    <Routing />

    </>
  )
}

export default App


// react component Lifecycle 
// 1. Component Mount/Create -> jab bhi hamara component open hota hai browser me to wo Mount/Create ho rha hota hai
// 2. Component Update -> jab bhi hum bane hue page me useState se updation karte hai
// 3. Component Delete -> jab hum ek component se dusre component me switch karte hai 


// Reconcilation Updating 
// isme kisi ek component ka data change hota hai only

// Reconcilation Rerendering
// isme pura page Rerender hota hai , matlab page Refresh

