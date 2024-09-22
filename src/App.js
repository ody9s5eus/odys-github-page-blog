import React, { Suspense, lazy } from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Post = lazy(() => import('./pages/Post'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
