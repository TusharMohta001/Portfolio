import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'

const App = () => {

  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      {!loading && (
        <>
          <CustomCursor/>
          <PageTransition>
            <Routes >
              <Route path='/' element={<Home/>} />
              <Route path='/About' element={<About/>}/>
              <Route path='/Project' element={<Project/>}/>
              <Route path='/Contact' element={<Contact/>}/>
            </Routes>
          </PageTransition>
        </>
      )}
    </>
  )
}

export default App