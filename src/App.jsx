import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './routes/PrivacyPolicy';

export default function App() {
  return (
    <Router basename="/privacy"> {/* Use the base path here */}
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} /> {/* Make Home relative to "/privacy" */}
      </Routes>
    </Router>
  );
}