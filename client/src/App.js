import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetail from './components/AudiobookDetail';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AudiobookList />} />
        <Route path="/audiobooks/:id" element={<AudiobookDetail />} />
        <Route path="/reviews/:id" element={<ReviewForm />} /> 
      </Routes>
    </Router>
  );
}
export default App;