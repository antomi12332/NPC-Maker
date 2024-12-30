'use client'
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from "../store/store";

export default function Providers({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>
    <Provider store={store}>
      {children}
    </Provider>
  </ApolloProvider>;
}
