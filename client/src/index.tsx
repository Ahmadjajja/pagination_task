import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import App1 from "./App1";
import App2 from "./App2";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const theme = extendTheme({
  components: {
    Steps,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/",
});

ReactDOM.render(
  <>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <App2 />
      </ChakraProvider>
    </ApolloProvider>
  </>,
  document.getElementById("root")
);
