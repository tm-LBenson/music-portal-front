import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'
import './components/stylesheets/home.css'
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import React from 'react';
import Home from './components/home/Home'
import SplashPage from './components/splashPage/SplashPage' //TODO conditional rendering after login
function App() {
  return (
    <React.Fragment>
      <SplashPage />
    </React.Fragment>
  );
}

export default App;
<React.Fragment >
  <NavDrawer />
  <NavArea />
  <Home />
</React.Fragment>