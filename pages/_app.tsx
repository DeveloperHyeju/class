import { globalStyles } from "@/src/commons/styles/globalStyles";
import ApolloSetting from "@/src/components/commons/apollo";
import Layout from "@/src/components/commons/layout";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
