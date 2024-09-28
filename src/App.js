import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import BridgesBuddy from './components/BridgesBuddy';
import TranslationAdaptability from './components/TranslationAdaptability';
import CommunityEngagement from './components/CommunityEngagement';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/bridges-buddy" element={<BridgesBuddy />} />
        <Route path="/translation-adaptability" element={<TranslationAdaptability />} />
        <Route path="/community-engagement" element={<CommunityEngagement />} />
      </Routes>
    </Router>
  );
}

export default App;
