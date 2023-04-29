import { NextPage, GetServerSidePropsContext } from "next";
import React from "react";
import { checkAuth } from "../../../utils/checkAuth";
import { CustomHeader } from "@/components/Header";

const DashboardPage: NextPage = () => {
  return (
    <>
      <main>
        <CustomHeader />
        <h1>Dashboard page</h1>
      </main>
    </>
  );
};

// DashboardPage.getLayout = (page: React.ReactNode) => {
//   return <Layout title="Dashboard / Главная">{page}</Layout>;
// };

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};

export default DashboardPage;
