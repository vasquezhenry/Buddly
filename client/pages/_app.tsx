import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Button, Input } from '../styles/themeStyles';

const theme = extendTheme({
  colors: {
    rowanBrown: '#3f1a0a',
    rowanYellow: '#edd51c',
  },
  components: {
    Button,
    Input,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
