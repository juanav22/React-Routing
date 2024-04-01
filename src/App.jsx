import React, {Suspense, lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import HomePage from './pages/home'
// import AboutPage from './pages/about'
// import ContactPage from './pages/contact';
// import NotFoundPage from './pages/not-found';
// import ProfilePage from './pages/profile'

const HomePage = lazy(() => import('./pages/home'))
const AboutPage = lazy(() => import('./pages/about'))
const ContactPage = lazy(() => import('./pages/contact'))
const NotFoundPage = lazy(() => import('./pages/not-found'))
const ProfilePage = lazy(() => import('./pages/profile'))
const UserPage = lazy(() => import('./pages/user'))



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/profile' element={<AboutPage/>} />
          <Route path='/user/:id' element={<UserPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
