import React from 'react'
import ComponentLifecycleNav from './components/ComponentLifecycleNav'
import {Link, Route, Routes} from 'react-router-dom'
import ComponentLifecycleHome from './components/ComponentLifecycleHome'
import ComponentLifecycle from './components/ComponentLifecycle'
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


// Re-rendering
// Component dobara execute hota hai aur naya JSX output calculate hota hai.

// Reconciliation
// React purane aur naye render output ko reconcile karke decide karta hai
// ki UI mein kya specific update ya replace karna hai.

// DOM Updating
// React browser DOM mein zaroori changes apply karta hai.
// Ek ya multiple elements change ho sakte hain.

// Page Reload
// Browser current document ko dobara load karta hai.
// Yeh React component ke re-render hone se alag hai.



// Reconciliation = purane aur naye render output mein differences ko samajhkar zaroori UI changes decide karna.
// Re-rendering ka matlab hai component ko dobara execute karke uska naya render output calculate karna.

// Lekin dhyan rakhiye: React har re-render par DOM update nahi karta. Agar naya output purane output ke barabar hai, toh DOM mein koi change zaroori nahi ho sakta.
