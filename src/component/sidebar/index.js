import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Brands from "../brand/Brands";
import Product from "../products/Product";
import Distilleries from "../distillery/Distilleries";
import ReleasesCatalogue from "../products/ReleasesCatalogue";

const SideBarRouting = () => {
  return (
    <>
      <Routes>
          <Route path='/' element = { <Home /> } />
          <Route  path='/brands' element = { <Brands /> } />
          <Route  path='/products' element = { <ReleasesCatalogue  /> } />
          <Route  path='/distilleries' element = { <Distilleries  /> } />
      </Routes> 
    </>
  );
}

export default SideBarRouting;