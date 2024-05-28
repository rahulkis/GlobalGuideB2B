import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Brands from '../brand/Brands';
import Company from '../company/Company';
import Distilleries from '../disitillery/Distilleries';
import Home from '../Home';
import Release from '../release/Release';


function HeaderRoutes(){
  return (
    <>
      <Routes>
          <Route exact path='' element = { <Home  /> } />
          <Route exact path='/releases' element = { <Release  /> } />
          <Route  path='/brands' element = { <Brands /> } />
          <Route  path='/company' element = { <Company /> } />
          <Route  path='/distilleries' element = { <Distilleries /> } />
      </Routes> 
    </>
  )

}

export default HeaderRoutes;