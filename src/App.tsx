import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { WhiteLabelPage } from './components/pages/WhiteLabelPage';
import { TorrefacaoPage } from './components/pages/TorrefacaoPage';
import { EventosPage } from './components/pages/EventosPage';
import { CaseKurubiPage } from './components/pages/CaseKurubiPage';
import { SobrePage } from './components/pages/SobrePage';
import { ContatoPage } from './components/pages/ContatoPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criar-marca" element={<WhiteLabelPage />} />
            <Route path="/torrefacao" element={<TorrefacaoPage />} />
            <Route path="/eventos" element={<EventosPage />} />
            <Route path="/case-kurubi" element={<CaseKurubiPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
