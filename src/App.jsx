import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as BrowserRouter,
  Link,
  Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import CharactersPage from './Pages/CharactersPage'
import Episodes from './Pages/EpisodesPage'
import Locations from './Pages/LocationsPage'
import Home from './Pages/Home'
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Router>
        <BrowserRouter>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Characters" element={<CharactersPage />} />
            <Route path="Locations" element={<Locations />} />
            <Route path="Episodes" element={<Episodes />} />
            {/* <Route path="Characters/:name" element={<CharacterDetail />} /> */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </BrowserRouter>
      </Router>
    </div>
  );
}


function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>

  );
}

const NoMatch = () => {
  return (
    <div className='mt-24'>Error 404</div>
  )
}




