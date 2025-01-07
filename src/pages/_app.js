import Header from "@/components/common/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
