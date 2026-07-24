import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// Enveloppe commune à toutes les pages.
// <Outlet /> = l'endroit où React Router affiche la page active.
// Header et Footer sont ici une seule fois, donc partagés par toutes les pages.
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
