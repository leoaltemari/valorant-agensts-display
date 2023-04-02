import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'src/app/pages/Home/Home';


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}