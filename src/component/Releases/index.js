import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import AddBook from './AddBook';
import ReleasesList from './ReleasesList';

function ReleasesProductRoutes(){

  return (
    <>
      <Routes>
          <Route exact path='/' element = { <ReleasesList /> } />
          {/* <Route  path='/add-book' element = { <AddBook /> } /> */}
      </Routes> 
    </>
  )

}

export default ReleasesProductRoutes;