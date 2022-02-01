import type { AppProps, NextWebVitalsMetric } from 'next/app'
import CartProvider from '@store/Cart'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  // Use for Context/Providers, theme, data.
  // Layouts
  // Additional props
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
