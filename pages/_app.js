// import 'flowbite/dist/flowbite'
import 'remixicon/fonts/remixicon.css'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/flowbite@latest/dist/flowbite.js"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
