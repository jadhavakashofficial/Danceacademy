// components/Layout.js
import Header from './Header'
import Footer from './Footer'
import EventPopup from './EventPopup'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <EventPopup />
    </div>
  )
}
