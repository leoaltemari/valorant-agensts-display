import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
      </Routes>
    </Router>
  )
}