import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
