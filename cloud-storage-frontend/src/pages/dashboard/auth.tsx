import { LoginForm } from "@/components/auth/LoginForn";
import { NextPage } from "next";
import Head from "next/head";

import { Tabs } from "antd";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FC</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <Tabs
          items={[
            {
              label: "Войти",
              key: "1",
              children: <LoginForm />,
            },
            {
              label: "Регистрация",
              key: "2",
              children: <h1>Регистрация</h1>,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
