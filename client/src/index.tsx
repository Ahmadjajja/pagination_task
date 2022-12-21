import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import App1 from "./App1";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <>
    <ChakraProvider>
      <App1 />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
