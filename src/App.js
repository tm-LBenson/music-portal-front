import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import React from 'react';
import HeroTagLine from './components/home/HeroTagLine';
function App() {
  return (
    <React.Fragment>
      <NavDrawer />
      <NavArea />
      <HeroTagLine />
    </React.Fragment>
  );
}

export default App;
