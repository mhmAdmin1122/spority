import "@/styles/globals.css";
import "@/styles/admin.css";
import "@/styles/buttons.css";
import "@/styles/Newslatter.css";
import "@/styles/channels.css";
import "@/styles/sliders.css";
import "@/styles/warisstyle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
