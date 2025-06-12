import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BookParty from './pages/BookParty'
import Contact from './pages/Contact'
import ChefMixologist from './pages/ChefMixologist'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/test-pdf" element={
              <div style={{ width: '100%', height: '100vh' }}>
                <iframe 
                  src="/PORCHE_Menu-1.pdf" 
                  style={{ width: '100%', height: '100%' }}
                  title="PDF Test"
                />
              </div>
            } />
            <Route path="/reservation" element={
              <div className="min-h-[80vh] pt-20">
                <div className="container mx-auto px-6 py-12">
                  <h1 className="text-5xl font-display mb-8 text-center">Make a Reservation</h1>
                  <p className="text-center text-neutral-600">Reservation Page Coming Soon</p>
                </div>
              </div>
            } />
            <Route path="/book-party" element={<BookParty />} />
            <Route path="/team" element={
              <div className="min-h-[80vh] pt-20">
                <div className="container mx-auto px-6 py-12">
                  <h1 className="text-5xl font-display mb-8 text-center">Our Team</h1>
                  <p className="text-center text-neutral-600">Chef & Mixologist Page Coming Soon</p>
                </div>
              </div>
            } />
            <Route path="/review" element={
              <div className="min-h-[80vh] pt-20">
                <div className="container mx-auto px-6 py-12">
                  <h1 className="text-5xl font-display mb-8 text-center">Review Us</h1>
                  <p className="text-center text-neutral-600">Review Page Coming Soon</p>
                </div>
              </div>
            } />
            <Route path="/location" element={
              <div className="min-h-[80vh] pt-20">
                <div className="container mx-auto px-6 py-12">
                  <h1 className="text-5xl font-display mb-8 text-center">Location</h1>
                  <p className="text-center text-neutral-600">Location Page Coming Soon</p>
                </div>
              </div>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/chef-mixologist" element={<ChefMixologist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
