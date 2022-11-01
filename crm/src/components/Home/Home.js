import React from 'react';
import "./Home.css";
import {Navbar} from '../Navbar/Navbar';
import {Message} from '../MessageVolume/message';

function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Message/>
    </div>
    </>
  );
}

export default Home;