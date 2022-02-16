import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
import './App.css';

import Home from './pages/home'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
