import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className="layout"><Component {...pageProps} /></div>
}

export default MyApp
