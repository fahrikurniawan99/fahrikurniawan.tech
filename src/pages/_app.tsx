import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Container maxWidth="sm">
        <Navigation />
        <Component {...pageProps} />
      </Container>
    </main>
  );
}
