
import React from 'react';
import { SideBar } from './SideBar';
import '../styles/Home.css'

function Home() {
  return (
    <div className="pageLayout d-flex">
      <SideBar />
      <div className='welcomeCard col-9'>
        <div className='title'> Welcome to Facebook </div>
      </div>
    </div>
  );
}

export default Home;
