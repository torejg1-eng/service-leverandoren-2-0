"use client";

import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100dvh - var(--header-height) - 56px)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
