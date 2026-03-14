import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import EpicUnawatuna from './pages/EpicUnawatuna';
import BlissByEpic from './pages/BlissByEpic';
import AuraByEpic from './pages/AuraByEpic';
import JournalPage from './pages/JournalPage';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/epic-unawatuna" element={<EpicUnawatuna />} />
        <Route path="/bliss-by-epic" element={<BlissByEpic />} />
        <Route path="/aura-by-epic" element={<AuraByEpic />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
