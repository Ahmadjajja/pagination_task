import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import App1 from "./App1";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  components: {
    Steps,
  },
});

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <App1 />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
