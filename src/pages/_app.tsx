import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainContextProvider from "../context/MainContext";
import "../styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      <Head>
        <title>V-Products</title>
        <meta name="description" content="Site Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainContextProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </MainContextProvider>
        </>
      )}
    </>
  );
};
export default App;
