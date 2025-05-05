import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignInPage" element={<SignIn />} />
        <Route path="/SignUpPage" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
