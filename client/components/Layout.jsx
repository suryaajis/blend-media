import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { children, pageTitle } = props;

  return (
    <div>
      <Head>
        <title>iBox - {pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
