import './components/stylesheets/App.css'
import './components/stylesheets/reset.css'
import NavDrawer from './components/NavDrawer';
import NavArea from './components/NavArea'
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <NavDrawer />
      <NavArea />
    </React.Fragment>
  );
}

export default App;
