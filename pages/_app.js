import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <Script src="flowbite/dist/flowbite.min.js" /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
