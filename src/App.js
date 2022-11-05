import './components/stylesheets/reset.css'
import './components/stylesheets/App.css'
import './components/stylesheets/home.css'
import NavDrawer from './components/nav/NavDrawer';
import NavArea from './components/nav/NavArea'
import React from 'react';
import HeroTagLine from './components/home/HeroTagLine';
function App() {
  return (
    <React.Fragment>
      <NavDrawer />
      
      <NavArea />
      <main className='wrapper'>
        <section className='col-1'>
          <div className='video'></div>
        </section>
        <section className='col-2'>
          <HeroTagLine />
          <div className='hero__trending'>TRENDING</div>
          <section className='cards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>

          </section>
        </section>
        <section className='col-3'>
          <div className='search'>Search</div>
          <div className='play-list'>playlist</div>
        </section>


      </main>

    </React.Fragment>
  );
}

export default App;
