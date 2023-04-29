import React from "react";
import Head from "next/head";
import { CustomHeader } from "@/components/Header";

import styles from "./Home.module.scss";

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = () => {
  return (
    <>
      <Head>
        <title>{"title"}</title>
      </Head>
      <main>
        <CustomHeader />
        <div className={styles.main}>
          <div className={styles.layout}></div>
        </div>
      </main>
    </>
  );
};
