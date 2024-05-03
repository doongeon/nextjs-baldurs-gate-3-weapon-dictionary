import Recoil from "./Recoil";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import "./global.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "발게삼",
  description: "발더스 게이트 3 아이템 사전입니다.",
  metadataBase: new URL("https://bg-3-dict.vercel.app/"),
  icons: "/images/favicon.ico",
  openGraph: {
    siteName: "발게삼",
    title: "발게삼",
    description: "발더스 게이트 3 아이템 사전입니다.",
    images: [{ url: "/images/favicon.png", width: 400, height: 300 }],
    url: "https://bg-3-dict.vercel.app/",
  },
  verification: {
    google: "glH39Ot9oC2J7TwW-y5kpjgj_nJ0Z-GlAcpgRgF1d6Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <meta content="" />
      </Head>
      <body className="w-screen h-max bg-neutral-900 flex flex-col items-center text-white py-36 px-10 m-auto gap-10 overflow-scroll">
        <Title />
        <Recoil>
          <Suspense>
            <SearchBar />
          </Suspense>
          {children}
        </Recoil>
      </body>
    </html>
  );
}
