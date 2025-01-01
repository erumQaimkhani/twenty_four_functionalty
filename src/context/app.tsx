import { AppProps } from 'next/app'; 
import CartProvider from './cartcontext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
