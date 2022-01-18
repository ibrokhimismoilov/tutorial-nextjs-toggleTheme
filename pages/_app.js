import Link from 'next/link'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log("[App] render");

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <p align="center">Project by Ibrokhim</p>
      </footer>
    </>
  )
}

export default MyApp
