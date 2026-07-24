import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ViewAll from './pages/ViewAll.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Toutes les pages dans Layout partagent le Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/view-all" element={<ViewAll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
