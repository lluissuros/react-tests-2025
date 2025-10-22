import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Placeholder from './components/Placeholder';
import AsyncCodeExample from './components/AsyncCodeExample';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tab-2" element={<AsyncCodeExample />} />
        <Route path="/tab-3" element={<Placeholder title="Tab Three" />} />
      </Routes>
    </div>
  );
}

export default App;
